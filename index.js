var fs = require('fs');

//var readMe =  fs.readFileSync('README(1).md','utf8');
//console.log(readMe);

fs.readFile('README(1).md','utf8', function(err, data){
    //console.log(data);
    var x = "word";
    const inquirer = require('inquirer');

    // Prompt the user
var y =    inquirer
    .prompt([
        {
        type: 'input',
        name: 'Title',
        message: 'Title'
        },
        {
        type: 'input',
        message: 'Description',
        name: 'Description'
        },
        {
        type: 'input',
        message: 'Table Of Contents',
        name: 'Table Of Contents'
        },
        {
        type: 'input',
        message: 'Installation',
        name: 'Installation'
        },
        {
        type: 'input',
        message: 'Usage',
        name: 'Usage'
        },
        {
        type: 'input',
        message: 'License',
        name: 'License'
        },
        {
        type: 'input',
        message: 'Contributing',
        name: 'Contributing'
        },
        {
        type: 'input',
        message: 'Tests',
        name: 'Tests'
        },
        {
        type: 'input',
        message: 'Question',
        name: 'Question'
        }
    ]) // Write the user response to a file by chaining the below callback method to the prompt above.
    .then(function(data) {
        // Bonus: Generate the name of your user file from their input
        
        /*data.name
            .toLowerCase()
            .split(' ')
            .join('') + '.json';
        */
        fs.writeFile('README.md', JSON.stringify(data, null, '\t'), function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
        });
    })


    /*fs.writeFile('README(2).md', y ,function(err, data){

    });*/
});
