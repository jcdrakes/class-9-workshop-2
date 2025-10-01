let catGif;

function preload() {
  catGif = loadImage('cat.gif');
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background('lightblue');
	image(catGif, 200,200);
}

