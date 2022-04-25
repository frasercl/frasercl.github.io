import me from "./img/me.jpg";
import img_heightmap from "./img/heightmap.png";
import img_heightmap3d from "./img/heightmap3d.png";
import img_anagram from "./img/anagram.png";
import img_maze from "./img/maze.png";
import img_maze_hex from "./img/hexmaze.png";
import img_bpm from "./img/bpmchart.png";
import img_conics from "./img/conics.png";

export const info = {
	img: me,
	img_alt: "A photo of Cameron Fraser",
	title: "Cameron Fraser",
	paragraphs: [
		"Hi! I'm Cameron. I'm a recent Computer Science graduate from Seattle who's been programming for 10ish years in all sorts of languages.",
		"Sometimes I make things for the web. Here are some things I've made for the web.",
	]
}

export const cards = [
	{
		id: "HeightmapSandbox",
		title: "Heightmaps",
		img: img_heightmap,
		img_alt: "",
		description: "A weekend project I wrote at the beginning of my internship, messing with terrain generation and cost-distance analysis.",
		href: "https://frasercl.github.io/heightmap_sandbox",
	},
	{
		id: "Heightmap3d",
		title: "3D Heightmaps",
		img: img_heightmap3d,
		img_alt: "",
		description: "The same simple terrain generation algorithm, now running on the GPU to generate an infinite explorable world. Mostly a shader exercise - see the original for more details.",
		href: "https://frasercl.github.io/heightmap_3d",
	},
	{
		id: "Anagrams",
		title: "Anagrams",
		img: img_anagram,
		img_alt: "",
		description: "A tool which helps with writing anagrams. I built this because I think it presents an interesting UX design problem, and will likely come back to it and tinker with new features.",
		href: "https://frasercl.github.io/anagram/",
	},
	{
		id: "MazeGenerator",
		title: "Mazes",
		img: img_maze,
		img_alt: "",
		description: "A little experiment which generates and solves a maze on a canvas, and animates its process while doing it.",
		href: "https://frasercl.github.io/mazes/",
	},
	{
		id: "HexMazeGenerator",
		title: "Hex Mazes",
		img: img_maze_hex,
		img_alt: "",
		description: "A quick adaptation of the mazes project with hexagonal tiles.",
		href: "https://frasercl.github.io/mazes/hex.html",
	},
	{
		id: "BPM",
		title: "BPM Finder",
		img: img_bpm,
		img_alt: "",
		description: "A tool I made a long time ago to find the tempo of a song.",
		href: "https://frasercl.github.io/bpm/",
	},
	{
		id: "Conics",
		title: "Conics",
		img: img_conics,
		img_alt: "",
		description: "Another one from a while ago. This project was written for a high school math class, and interactively graphs conic sections chosen with the arrow keys.",
		href: "https://frasercl.github.io/conics/",
	}
];
