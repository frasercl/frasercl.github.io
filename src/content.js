import maze_test from "./img/maze_test.jpg";
import chord_test from "./img/chord_test.jpg";
import me from "./img/me.jpg";

export const info = {
	img: me,
	img_alt: "A photo of me!",
	title: "Cameron Fraser",
	paragraphs: [
		"Hi! I'm Cameron. I've been programming for 10ish years in all sorts of languages.",
		"Sometimes I make things for the web. Here are some things I've made for the web."
	]
}

export const cards = [
	{
		id: "Anagram",
		title: "Anagram",
		img: maze_test,
		img_alt: "A picture of a hedge maze, from above.",
		description: "This is a much more current project: to see how easy I could make writing two anagrammed sentences. It's not much at the moment, but I'm actively adding to it. (Dictionary coming soon!)"
	},
	{
		id: "MazeGenerator",
		title: "Maze Generator",
		img: maze_test,
		img_alt: "A picture of a hedge maze",
		description: "Things and stuff."
	},
	{
		id: "Chords",
		title: "Chords",
		img: chord_test,
		img_alt: "Close-up picture of a piano keyboard",
		description: "More things, more stuff!"
	},
	{
		id: "Foo",
		title: "Foo",
		img: chord_test,
		img_alt: "Close-up picture of a piano keyboard",
		description: "More things, more stuff!"
	}
];