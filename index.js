const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateREADME');

const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your Project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your Project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'What is your project and what problem will it solve?',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                console.log('Please enter the details of your project');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'installation',
        message: 'Please enter step by step installation instructions for your project',
        validate: installInst => {
            if(installInst) {
                return true;
            } else {
                console.log('Please enter your installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions and provide examples of when a user will use your project.',
        validate: usageInst => {
            if(usageInst) {
                return true;
            } else {
                console.log('Please enter your usage instructions');
                return false;
            }
        }
    },
    {
        type:'confirm',
        name: 'confirmContributors',
        message: 'Would you like to allow others to contribute to your project?',
        default: true
    },
    {
        type:'input',
        name:'contributions',
        message:'Please enter your contribution guidelines.',
        when: ({confirmContributors}) => {
            if(confirmContributors){
                return true;
            } else {
                return false;
            }
        },
        validate: contriubtionInput => {
            if (contriubtionInput) {
                return true;
            } else {
                console.log('Please enter your contribution guidelines');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'testing',
        message:'Please enter the instructions on how to test the application',
        validate: testingInst => {
            if(testingInst) {
                return true;
            } else {
                console.log('Please enter the instructions on how to test');
                return false;
            }
        }
    },
    {
        type:'list',
        name: 'license',
        message: 'Please choose what license you used for your project',
        choices: ['MIT', 'Apache', 'GNU', 'Unlicensed']
    },
    {
        type:'input',
        name:'githubAccount',
        message:'What is your GitHub username?',
        validate: githubEl => {
            if (githubEl) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    }
];

const createFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./new-README.md', fileContent, error => {
            if(error) {
                reject(error);
                return;
            }
            resolve({
                ok:true,
                message:'README file created!'
            });
        });
    });
};

const init = () => {
    return inquirer.prompt(questions)
    .then(readmeContent => {
        return readmeContent;
    })
}

init()
.then(readmeContent => {
    console.log(readmeContent);
    return generateREADME(readmeContent);
})
.then(pageMD => {
    return createFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})