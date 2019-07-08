const fs = require('fs');

const readStream = fs.createReadStream('./lib/ReadMe.md', 'UTF-8');

let fileTxt = "";

console.log('Type something ....');
//process.stdin.on('data', data => {
    readStream.on('data', data => {
    console.log(`I read ${data.length -1} characters of text`);
    fileTxt += data;
    //process.exit();
});

readStream.once('data', data => {
    console.log(data);
});

readStream.on('end', () => {
    console.log('Finished reading file');
    console.log(`In total i read ${fileTxt.length-1} characters of text`);
});