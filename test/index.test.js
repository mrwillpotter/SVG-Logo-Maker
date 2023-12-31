const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

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
      choices: ['blue', 'black','red','green']
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

function init() {
inquirer.prompt(questions).then((response) => {
    
    if (response.shape === 'triangle') {
        const shape = new Triangle(response.shapeColor, response.text)
        generateSVG('LOGO.svg', shape.render())  
    }
  
})    
}

init();

