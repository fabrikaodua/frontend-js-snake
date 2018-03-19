﻿import Snake from '../../src/classes/snake.js';
import SnakePart from '../../src/classes/snake-part.js';
import BaseElement from '../../src/classes/base-element.js';

describe('Snake Part', function () {
	describe('interface has a', function () {
		var part = new SnakePart();
		it('property "direction"', function () {
			expect(part.direction).toBeDefined();
		});

		it('method "move()"', function () {
			expect(part.move).toBeDefined();
		});
	});

	describe('recieves a', function () {
		var part = new SnakePart();
		it('property "x" from a Base Element', function () {
			expect(part.x).toBeDefined();
		});
		it('property "y" from a Base BaseElement', function () {
			expect(part.y).toBeDefined();
		});
		it('property "visible" from a Base BaseElement', function () {
			expect(part.visible).toBeDefined();
		});
	});

	it('is instance of a Base Element', function () {
		var part = new SnakePart();
		expect(part instanceof BaseElement).toBe(true);
	});

	it('property "visible" is `true` by default', function () {
		var part = new SnakePart();
		expect(part.visible).toBe(true);
	});

	it('has {x:0, y:0} coordinates by default', function () {
		var part = new SnakePart();
		expect(part.x).toBe(0);
		expect(part.y).toBe(0);
	});

	describe('config argument correctly affects a', function () {
		var config = {
			x: 774,
			y: 88,
			visible: false,
			direction: 'down'
		}
		var part = new SnakePart(config);
		it('property "x"', function () {
			expect(part.x).toEqual(config.x);
		});
		it('property "y"', function () {
			expect(part.y).toEqual(config.y);
		});
		it('property "visible"', function () {
			expect(part.visible).toEqual(config.visible);
		});
		it('property "direction"', function () {
			expect(part.direction).toEqual(config.direction);
		});
	});

	describe('can move', function () {
		var part;
		beforeEach(function () {
			part = new SnakePart({ x: 10, y: 10 });
			spyOn(part, 'move').and.callThrough();
		});
		it('left', function () {
			var steps = 3;
			part.direction = 'left';
			part.move(steps);
			expect(part.x).toEqual(7);
			expect(part.y).toEqual(10);
		});
		it('right', function () {
			var steps = 4;
			part.direction = 'right';
			part.move(steps);
			expect(part.x).toEqual(14);
			expect(part.y).toEqual(10);
		});
		it('up', function () {
			var steps = 15;
			part.direction = 'up';
			part.move(steps);
			expect(part.x).toEqual(10);
			expect(part.y).toEqual(-5);
		});
		it('down', function () {
			var steps = 3;
			part.direction = 'down';
			part.move(steps);
			expect(part.x).toEqual(10);
			expect(part.y).toEqual(13);
		});
	});

	describe('can move witn a negative step', function () {
		var part;
		beforeEach(function () {
			part = new SnakePart({ x: 10, y: 10 });
			spyOn(part, 'move').and.callThrough();
		});
		it('left', function () {
			var steps = -3;
			part.direction = 'left';
			part.move(steps);
			expect(part.x).toEqual(13);
			expect(part.y).toEqual(10);
		});
		it('right', function () {
			var steps = -4;
			part.direction = 'right';
			part.move(steps);
			expect(part.x).toEqual(6);
			expect(part.y).toEqual(10);
		});
		it('up', function () {
			var steps = -15;
			part.direction = 'up';
			part.move(steps);
			expect(part.x).toEqual(10);
			expect(part.y).toEqual(25);
		});
		it('down', function () {
			var steps = -3;
			part.direction = 'down';
			part.move(steps);
			expect(part.x).toEqual(10);
			expect(part.y).toEqual(7);
		});
	});

	describe('don\'t move, if no steps', function () {
		var part;
		beforeEach(function () {
			part = new SnakePart({ x: 10, y: 10 });
		});
		[
			'left',
			'right',
			'up',
			'down'
		].forEach(function (direction) {
			it(direction, function () {
				part.direction = direction;
				part.move();
				expect(part.x).toEqual(10);
				expect(part.y).toEqual(10);
			});
		});
	});
});
