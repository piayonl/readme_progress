var inquirer = require('inquirer');
var path = require('path');
var fs = require('fs');

// function init() {
  fs.writeFile("license.txt", process.argv[2], function(err) {

    if (err) {
      return console.log(err);
    }
 
    console.log ("license.txt created!");
  });

  inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Name of this README?"
      },
      {
        type: "input",
        name: "Description",
        message: "Describe this README?"
      },
      {
        type: "list",
        name: "TOC",
        message: "Table of Contents.",
        choices: [
          "Installation",
          "Usage",
          "License",
          "Contributing",
          "Tests",
          "Questions"
        ]
      },
      {
        type: "input",
        name: "Installation",
        message: "Run installation. Version 1.0.0:"
  
      },
       {
          type: "input",
          name: "Usage",
          message: "How to use this project?"
    
        },
        {
          type: "input",
          name: "Contributing",
          message: "Who are the collaborators?"
    
        },
        {
        type: "input",
          name: "License",
          message: "License: MIT Copyright (c) 2020 Piayon Lassanah. See (license.txt) file for licensing details!"
          
        },
        {
          type: "input",
            name: "Test",
            message: "Version 1.0.0!"
          },

        {
          type: "input",
            name: "Questions",
            message: "Do you have any questions?"
            
          },
      ])
        .then(answers => {
          // Use user feedback for... whatever!!
          console.log(answers)
        })
        .catch(error => {
          if (error.isTtyError) {
            Console.log ("Wrong input!");
            // Prompt couldn't be rendered in the current environment
          } else {
            console.log ("See instructions!");
            // Something else when wrong
          }
    // init()
      });

      // function readFileAsync(path, encoding) {
      //   return new Promise(function(resolve, reject) {
      //     fs.readFile(path, encoding, function(err, data) {
      //       if (err) {
      //         return reject(err);
      //       }
      
      //       resolve(data);
      //     });
      //   });
      // }
      
      // readFileAsync("license.txt", "utf8")
      //   .then(function(data) {
      //     console.log(data);
      //   })
      //   .catch(function(err) {
      //     console.log(err);
      //   });

    