import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as content from "./content.js";

const MAX_CARD_TILT = 4.5;
const CARD_SCALE_FACTOR = 1.06;

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.cardElement = React.createRef();
		this.waitingForFrame = false;
		this.noDraw = false;
		this.mouseOutWaiting = false;
		this.mouseOutTimeout = 0;
	}

	componentDidMount() {
		this.props.resizeObserver.observe(this.cardElement.current);
	}

	componentWillUnmount() {
		this.props.resizeObserver.unobserve(this.cardElement.current);
	}

	onMouseOut() {
		//mouseout/mouseover may both fire when mouse moves between children;
		//mouseOutWaiting and mouseOutTimeout clear out false positives
		this.mouseOutWaiting = true;
		this.mouseOutTimeout = window.setTimeout(() => {
			this.cardElement.current.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)";
			this.mouseOutWaiting = false;
			//Pause drawing briefly after mouseout, to avoid stray frames
			//"sticking" element in transformed state
			this.noDraw = true;
			window.setTimeout(() => { this.noDraw = false }, 50);
			this.props.onMouseOut();
		}, 10);
	}

	onMouseOver() {
		if (this.mouseOutWaiting) {
			//False positive; halt waiting mouseout handler
			console.log("Prevented mouseout");
			window.clearTimeout(this.mouseOutTimeout);
			this.mouseOutWaiting = false;
		} else {
			this.props.onMouseOver();
		}
	}

	onMouseMove(e) {
		if(!this.waitingForFrame) {
			window.requestAnimationFrame(() => this.renderTiltFrame(e));
			this.waitingForFrame = true;
		}
	}

	renderTiltFrame(e) {
		if(!this.noDraw) {
			let tiltX = (e.nativeEvent.offsetX * 2 / this.props.width - 1) * MAX_CARD_TILT;
			let tiltY = (e.nativeEvent.offsetY * 2 / this.props.height - 1) * -MAX_CARD_TILT;
			this.cardElement.current.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg) rotateZ(0deg) scale(${CARD_SCALE_FACTOR})`;
		}
		this.waitingForFrame = false;
	}

	render() {
		return (
			<div className="card_container">
				<div
					className="card"
					id={this.props.id}
					ref={this.cardElement}
					onMouseOver={e => this.onMouseOver(e)}
					onMouseOut={e => this.onMouseOut(e)}
					onMouseMove={e => this.onMouseMove(e)}
				>
					<div className="card-content" style={{fontSize: this.props.width / 24}}>
						<div className="card-content-image">
							<img src={this.props.content.img} alt={this.props.content.img_alt} />
						</div>
						<div className="card-content-title">{this.props.content.title}</div>
						<div className="card-content-description">{this.props.content.description}</div>
					</div>
				</div>
			</div>
		);
	}
}

/////////////////////////////////////////////////

class Projects extends React.Component {
	constructor(props) {
		super(props);
		let cardStates = {};
		for(const card of this.props.cards) {
			cardStates[card.id] = {
				hovered: false,
				width: 0,
				height: 0
			};
		}
		this.state = {cardStates};
		this.resizeObserver = new ResizeObserver(entries => this.handleCardResize(entries));
	}

	handleCardHover(id, isOver) {
		let cardStates = {...this.state.cardStates};
		cardStates[id].hovered = isOver;
		this.setState({cardStates});
	}

	handleCardResize(entries) {
		let cardStates = {...this.state.cardStates};
		for(const entry of entries) {
			let currentCardState = cardStates[entry.target.id];
			if(entry.borderBoxSize) {
				currentCardState.width = entry.borderBoxSize[0].inlineSize;
				currentCardState.height = entry.borderBoxSize[0].blockSize;
			} else {
				currentCardState.width = entry.contentRect.width;
				currentCardState.height = entry.contentRect.height;
			}
		}
		this.setState({cardStates});
	}

	render() {
		const projHasHover = Object.values(this.state.cardStates).reduce((a, {hovered}) => a || hovered, false);
		let cards = [];

		for(const card of this.props.cards) {
			const cardState = this.state.cardStates[card.id];
			cards.push(<Card
				key={card.id}
				id={card.id}
				width={cardState.width}
				height={cardState.height}
				onMouseOver={() => this.handleCardHover(card.id, true)}
				onMouseOut={() => this.handleCardHover(card.id, false)}
				//TODO: passing this reference feels inelegant. Fix?
				resizeObserver={this.resizeObserver}
				content={card}
			/>);
		}

		return (
			<div className="projectCol">
				<div className="projectCol-inner">
					<div className={`projectCol-filter${projHasHover ? " filter-on" : ""}`} />
					<div className="projectCol-cards">
						{cards}
					</div>
				</div>
			</div>
		);
	}
}

function Info(props) {
	let paragraphs = [];
	props.content.paragraphs.forEach((p, i) => {
		paragraphs.push(<p className="infoCol-body infoCol-inmargin" key={"paragraph"+i}>{p}</p>);
	});

	return (
		<div className="infoCol">
			<div>
				<img className="infoCol-image infoCol-inmargin" src={props.content.img} alt={props.content.img_alt}></img>
				<div className="infoCol-title">{props.content.title}</div>
				{paragraphs}
			</div>
		</div>
	);
}

function Page(props) {
	return (
		<div className="page_container">
			<Info content={content.info} />
			<Projects cards={content.cards} />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));