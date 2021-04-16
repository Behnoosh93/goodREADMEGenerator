const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is the title of your README.md?",
			name: "title",
		},
		{
			type: "input",
			message: " Give more description of your project",
			name: "description",
		},
		{
			type: "input",
			message: "Give usage information",
			name: "usage",
		},
		{
			
			type: "input",
			message: "Explain about installation instructions",
			name: "installation",
		},
		{
			type: "input",
			message: "Please give testing instructions",
			name: "testing",
		},
		{
			
			type: "input",
			message: " list contribution guidelines",
			name: "contributors",
		},
		{   type: "input",
		    message: "What's your email address?",
		    name: "email",
			
		},
		{
			type: "input",
			message: "What's your Github username?",
			name: "github",
		},
		{
			type: "list",
			message: "Please choose your license:",
			name: "license",
			choices: ["ISC", "MIT"],
			default: ["ISC"],
		},
	])
	.then((answers) => {
		console.log(answers);

		const readMeTemplat = `

 # ${answers.title}

[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})\n
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)


## Table of Contents \n
***[Project Description](#project-description)\n
***[Installation Instructions](#installation-instructions)\n
***[Usage Information](#usage-information)\n
***[Contribution Guidelines](#contribution-guidelines)\n
***[Testing Instruction](#testing-instructions)\n
***[Questions](#questions)


_______________________\n
## Project Description \n
${answers.description}
_______________________\n

_____________________________\n
## Installation Instructions \n
${answers.installation}
_______________________\n

____________________\n
## Usage Information \n
${answers.usage}
_______________________\n

__________________________\n
## Contribution Guidelines \n
${answers.contributors}
_______________________\n

_______________________\n
## Testing Instructions \n
${answers.testing}
_______________________\n

______________\n
## Questions \n
If you looking for more information you can contact to me by email  \n
[gmail ](https://mail.google.com/${answers.email})\n
[Github Account](https://www.Github.com/${answers.github})
`;
		const testREADME = Date.now();
		fs.writeFile("testREADME.md", readMeTemplat, "utf8", (err) => {
			if (err) throw err;
			console.log("Nice job !! you done with README.md file!");
		});
	});
