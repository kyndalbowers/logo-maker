const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const prompts = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three (3) characters for your logo:",
        validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return "Maximum of three(3) characters.";
            }
        }
    },
    {
        type: "input",
        name: "text color",
        message: "Please enter a color keyword OR hexadecimal number for the text",
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape:",
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: "input",
        name: "shape color",
        message: "Please enter a color keyword OR hexadecimal number for the shape",
    },
]

async function promptUser() {
    const userInput = await inquirer.prompt(prompts);

    let shapeInstance;
    switch (userInput.shape) {
        case 'circle':
            shapeInstance = new shapes.Circle();
        break;
        case 'triangle':
            shapeInstance = new shapes.Triangle();
        break;
        case 'square':
            shapeInstance = new shapes.Square();
        break;
    default:
        console.log('Invalid shape selected.');
        return;
    }

    shapeInstance.setColor(userInput.shapeColor);

    return {userInput, shapeInstance };

    generateLogo();
}

async function generateLogo() {
    const userInput = await promptUser();

    const logoSvg = `
    <svg width="300" height="200">
        ${userInput.shapeInstance.render()}
        <text x="50%" y="50%" text-anchor="middle" fill="${userInput.textColor}" font-size="50">${userInput.text}</text>
    </svg>`;

    return logoSvg;

    saveLogoToFile();
}

async function saveLogoToFile(logoSvg, filename) {
    try {
    fs.writeFileSync(filename, logoSvg);
    console.log(`Generated ${filename}`);
    } catch (error) {
    console.error('Error saving SVG file:', error);
    }
}

// async function main() {
    // const logoSvg = await generateLogo();
    // saveLogoToFile(logoSvg, 'logo.svg');
// }

// main();
