// requestAnimationFram calls callback 60 times/second

var animate = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) { window.setTimeout(callback, 1000/60)};

// Setting up a canvas and get its 2d context
var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

// on page load, attach canvas to the screen
// call step function using animate method
	// step functino updates objects, renders them, calls step again

window.onload = function() {
	document.body.appendChild(canvas);
	animate(step);
};

var step = function() {
	update();
	render();
	animate(step);
};

var update = function() {

};

var render = function() {
	context.fillStyle = "#d51eed";
	context.fillRect(0, 0, width, height);
};

// create paddle object
function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.x_speed = 0;
	this.y_speed = 0;
}

Paddle.prototype.render = function() {
	context.fillstyle = "#1eeded";
	context.fillRect(this.x, this.y, this.width, this.height);
};

// create players, with Paddle objects - one will be the computer
function Player() {
	this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
	this.paddle = new Paddle(175, 10, 50, 10)
}

// when rendering players - render their paddles
Player.prototype.render = function() {
	this.paddle.render();
};

Computer.prototype.render = function () {
	this.paddle.render();
};

// create ball object, radius of 5, positions based on x,y coordinates
function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.x_speed = 0;
	this.y_speed = 3;
	this.radius = 5;
}









