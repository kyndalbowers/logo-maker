const { Triangle, Circle, Square } = require('./shapes');

test('Triangle setColor method', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.shapeColor).toBe('blue');
});

test('Circle setColor method', () => {
    const circle = new Circle();
    circle.setColor('#ff0000');
    expect(circle.shapeColor).toBe('#ff0000');
});

test('Square setColor method', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.shapeColor).toBe('green');
});

test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor('#ff0000');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="#ff0000" />');
});

test('Square render method', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
