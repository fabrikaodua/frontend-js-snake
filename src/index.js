var BaseElement = require('./classes/base-element.js');
var Food = require('./classes/food.js');
var SnakePart = require('./classes/snake-part.js');
var Snake = require('./classes/snake.js');
var Main = require('./main.html').default;

new Main({ // eslint-disable-line no-new
	target: document.body
});

console.log(new BaseElement());
console.log(new Food());
console.log(new SnakePart());
console.log(new Snake());
