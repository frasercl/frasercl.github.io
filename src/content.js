import me from "./img/me.jpg";
import img_anagram from "./img/anagram.png";
import img_maze from "./img/maze.png";
import img_maze_hex from "./img/hexmaze.png";
import img_bpm from "./img/bpmchart.png";
import img_conics from "./img/conics.png";

export const info = {
	img: me,
	img_alt: "A photo of me!",
	title: "Cameron Fraser",
	paragraphs: [
		"Hi! I'm Cameron. I'm a Computer Science student from Seattle who's been programming for 10ish years in all sorts of languages.",
		"Sometimes I make things for the web. Here are some things I've made for the web."
	]
}

export const cards = [
	{
		id: "Anagrams",
		title: "Anagrams",
		img: img_anagram,
		img_alt: "Red and blue colored boxes, indicating the differing numbers of letters between two phrases.",
		description: "A current experiment in which I try to build the best anagram-writing tool I can. It's not much at the moment, but I'm actively adding features. (e.g. dictionary, word reordering)",
		href: "https://frasercl.github.io/anagram/"
	},
	{
		id: "MazeGenerator",
		title: "Mazes",
		img: img_maze,
		img_alt: "A screenshot of an incomplete maze, in the process of generation.",
		description: "A little experiment which generates and solves a maze on a canvas, and animates its process while doing it.",
		href: "https://frasercl.github.io/mazes/"
	},
	{
		id: "HexMazeGenerator",
		title: "Hex Mazes",
		img: img_maze_hex,
		img_alt: "A screenshot of a maze with hexagonal passageways, in the process of generation.",
		description: "A quick adaptation of the mazes project with hexagonal tiles.",
		href: "https://frasercl.github.io/mazes/hex.html"
	},
	{
		id: "BPM",
		title: "BPM Finder",
		img: img_bpm,
		img_alt: "A screenshot of the graph pane in the tempo tapper tool, which plots the time between successive taps.",
		description: "A tool I made a long time ago to find the tempo of a song.",
		href: "https://frasercl.github.io/bpm/"
	},
	{
		id: "Conics",
		title: "Conics",
		img: img_conics,
		img_alt: "A graph of assorted conic sections, showing foci and directrices.",
		description: "Another one from a while ago. This project was written for a high school math class, and interactively graphs conic sections chosen with the arrow keys.",
		href: "https://frasercl.github.io/conics/"
	}
];