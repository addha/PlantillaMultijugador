var canvas;
var database;


function preload() {
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

}

function draw() {
  background(backgroundImage);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}