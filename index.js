const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

(async () => {
  const answers = {
    title: await prompt('Enter the title of your project: '),
    description: await prompt('Provide a description of your project: '),
    installation: await prompt('Explain how to install your project: '),
    usage: await prompt('Explain how to use your project: '),
    contributing: await prompt('Explain how others can contribute to your project: '),
    license: await prompt('Choose a license for your project (MIT, GNU GPLv3, Apache 2.0, None): '),
    githubUsername: await prompt('Enter your GitHub username: '),
    email: await prompt('Enter your email address: '),
  };

  // Create the README content using the user's input
  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## License
This project is licensed under the ${answers.license} License.

## Questions
For questions, contact me at ${answers.email}.  
GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
`;

  // Write the README file
  fs.writeFileSync('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README file successfully generated! Yay!!!');
    }
    rl.close();
  });
})();
