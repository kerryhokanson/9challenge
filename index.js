const inquirer = require('inquirer');
const fs = require('fs');

const fileType = 'README.md'

const fileData = {
    title: [],
    description: [],
    installation:[],
    usage:[],
    lisence:[],
    contributing:[],
    testing:[],
}

async function title() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'what is the name of the project?',
                name: 'title',
            },
        ])
        
        .then((response) => {
            fileData.title = response.title;
        }) 
}

async function description() {
   return inquirer
        .prompt([
            {
                type: 'input',
                message: 'what is your description of the project?',
                name: 'description',
            }
        ])
        .then((response) => {
            fileData.description = response.description;
        }) 

}

async function installation() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'what are the installation instructions for the project?',
                name: 'installation',
            }
        ])
        .then((response) => {
            fileData.installation = response.installation;
        }) 

}

async function usage() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'how does one go about using the project?',
                name: 'usage',
            }
        ])
        .then((response) => {
            fileData.usage = response.usage;
        }) 

}

async function lisence() {
   return inquirer
  .prompt([
    {
      type: 'list',
      message: 'how will your project be licensed?',
      name: 'lisence',
      choices: ['Apache License 2.0', 'MIT License', 'Creative Commons Zero'],
    },
  ])
  .then((response) => {
    fileData.lisence = response.lisence;
}) 

}

async function contributing() {  
          return  inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'how would one go about contributing to this project?',
                        name: 'contributing',
                    },
                   
                ])
                .then(response => {
                    fileData.contributing = response.contributing;
                    console.log(fileData.contributing);
                })
        
}

async function tests() {
  return  inquirer
    .prompt([
      {
        type: 'input',
        message: 'how will your project be tested?',
        name: 'testing',
      },
    ])
    .then((response) => {
        fileData.testing = response.testing;
    }) 


}


// TODO: Create an array of questions for user input
const questions = ["what is the purpose of this application?"];

// TODO: Create a function to write README file
function writeFile(fileName, dataObject) {

    fs.writeFile(fileType, "", (err) =>{});

    for (const key in dataObject) {
        fs.appendFile(fileName, "# " + key + "\n" + "##" + dataObject[key] + "\n", (err) =>
        err ? console.error(err) : console.log('Success!'));
        
        // for (const element in dataObject[key]) {
        //     fs.appendFile(fileName,"\n" + "## " + dataObject[key][element], (err) =>
        //     err ? console.error(err) : console.log(dataObject[key][element]));
        // }
    }
}
// function writeToFile(fileName, data) {
//     fs.appendFile(fileName, data, function(err) {
//         if (err) {
//             console.log(err);
//         }
//     });
// }

// TODO: Create a function to initialize app
async function init(){
    await title();
    await description();
    await installation();
    await usage();
    await lisence();
    await contributing();
    await tests();
    writeFile(fileType, fileData);
}

// Function call to initialize app
init() 



