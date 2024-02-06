/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
// import path from "path";

// const questions = [
//     {
//         "type": 'input',
//         "name": 'siteName',
//         "message": 'Enter the site name: '
//     }
// ]
// console.log('Script started');
inquirer
  .prompt([
    {message: "Type your URL: ", 
    name: "URL"}

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers)
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("URL.txt", URL, (err) => {
        if (err) throw err;
        console.log("The file has beed saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something wrong.")
    } else {
      // Something else went wrong
    }
  });
// console.log('passed 1');


// var qrPng = qr.image(answers.siteName, {type: 'png'});

// var output = path.join(__dirname, `${answers.siteName}-qr.png`);

// var qrImage = fs.createWriteStream(output);

// qrPng.pipe(qrImage).on('finish', function() {
//     console.log('qr code generated and saved to ' + output);
// }).on('error', function(err) {
//     console.log("Error occured. " + err.message);
// })