class Shape {
    constructor(color, text, textColor){
        this.color = color;
        this.text  = text;
        this.textColor = textColor;        
    }
    render(svgProperty) {
        return `<?xml version="1.0" standalone="no"?>
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${svgProperty}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        // Call the parent constructor with 'circle' as the shape
        super(color, text, textColor);
    }
    render() {
        const svgProperty = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        return super.render(svgProperty);
    }    
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        // Call the parent constructor with 'Triangle' as the shape
        super(color, text, textColor);
    }
    render() {
        const svgProperty = `<triangle cx="150" cy="100" r="80" fill="${this.color}" />`;
        return super.render(svgProperty);
    }    
}

class Square extends Shape {
    constructor(color, text, textColor) {
        // Call the parent constructor with 'Square' as the shape
        super(color, text, textColor);
    }
    render() {
        const svgProperty = `<square x="50" y="50" width="100" height="100" fill="${this.color}" />`;
        return super.render(svgProperty);
    }    
}



module.exports = {Circle, Square, Triangle}