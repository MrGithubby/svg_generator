const inquirer = require('inquirer');
const colors = require('colors');
const chalk = require('chalk');
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes.js')


function shapeRender(shape, color, text, textColor) {
    switch(shape) {
        case 'Circle':
            return new Circle(color, text, textColor);
            break;
        case 'Triangle':
            return new Triangle(color, text, textColor);
            break;            
        case 'Square':
            return new Square(color, text, textColor);
            break;
    }
}



const questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter a name for this SVG."
    },
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters."
    },
    {
        type: "input",
        name: "color",
        message: "Please enter a shape color or a hexadecimal."
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a text color."
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape.",
        choices: ["Triangle", "Circle", "Square"]
    }
]

function init () {
    inquirer.prompt(questions)
        .then((data) => {
            svgShape = shapeRender(data.shape, data.color, data.text, data.textColor); /// This should a
            console.log(svgShape)
            svgRender = svgShape.render()
            const fileName = `./examples/${data.name.toLowerCase().split(' ').join('')}.svg`;
            fs.writeFile(fileName, svgRender, (err) =>
                err ? console.log(err) : console.log(`Generated ${fileName}!`)
            );
        }
    )
}


init()