// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
          } else {
              console.log('Enter your title name here!');
              return false;
          }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter you project description here!',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter your project description here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions here!',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter instructions here!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this program?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Explain how to use your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please explain how other people can contribute to your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instrcutions',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Enter test intrcutions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What liscence would you like to use?',
        choices: ['MIT', 'ISC', 'Apache liscense 2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license!.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter github username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email here',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('./projectreadme/README.md', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log('Your Read me has been created!')
      }
    })
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput)
})
.then(data => {
    return writeToFile(data)
})
.catch(err => {
    console.log(err)
});
