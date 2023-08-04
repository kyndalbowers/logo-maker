class Triangle {
    constructor() {
        this.shapeColor ='';
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<polygon points="150,18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

class Square {
    constructor() {
        this.shapeColor ='';
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<rect x="50" y ="50" width="200" height="200"> fill="${this.shapeColor}" />`;
    }
}

class Circle {
    constructor() {
        this.shapeColor ='';
    }

    setColor(color) {
        this.shapeColor = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
};