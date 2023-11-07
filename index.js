// Imported required packages
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please provide three letters to put into your logo:',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'What color would you like your text?',
      choices: ['yellow', 'black','white','pink']
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo?',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'What color would you like your shape?',
      choices: ['blue', 'black','red','green']
    }
]

//Function to generate the SVG file
function generateSVG(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//Function to handle the app
function init() {
inquirer.prompt(questions).then((response) => {

    console.log('Logo Generated!');

    if (response.shape === 'triangle') {
        const shape = new Triangle(response.shapeColor, response.text, response.textColor)
        generateSVG('Logo.svg', shape.render())  
    };
  
    if (response.shape === 'circle') {
        const shape = new Circle(response.shapeColor, response.text, response.textColor)
        generateSVG('Logo.svg', shape.render())  
    };

    if (response.shape === 'square') {
        const shape = new Square(response.shapeColor, response.text, response.textColor)
        generateSVG('Logo.svg', shape.render())  
    };

})    
}

init();

