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