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

