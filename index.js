// const { Command } = require('commander');
// const program = new Command ();
// program
// .name('CodeZone')       
// .description('A simple CLI tool')
// .version('1.0.0');

// program.command('add')
// .alias('a')
// .description('Add a new item')
// .argument('<title>', 'add course title')
// .option('--price <price>', 'add course price')
// .action((param,option)=>{
//     console.log("param , option",param,option);
// });

// program.parse(process.argv);




//make a cli tool that can add a course title and price to a json file using commander and inquirer

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';




const program = new Command ();
program
.name('CodeZone')       
.description('A simple CLI tool')
.version('1.0.0');

program.command('add')
.alias('a')
.description('Add a new item')
.action(()=>{
    inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter course title:',
    },
    {
        type: 'number',
        name: 'price',
        message: 'Enter course price:',
    }

]).then((answers) => {
    if (!fs.existsSync('courses.json')) {
        fs.writeFileSync('courses.json', JSON.stringify([answers]), 'utf-8');
        console.log('Data saved successfully');
    } else {
        fs.readFile('courses.json', 'utf-8', (err, fileContent) => {
            if (err) {
                console.log('Error reading file:', err);
                process.exit();
            }

            const fileContentAsJson = JSON.parse(fileContent);
            fileContentAsJson.push(answers);
            fs.writeFileSync('courses.json', JSON.stringify(fileContentAsJson), 'utf-8');
            console.log('Data saved successfully');
        });
    }
});
});


program.parse(process.argv);
















