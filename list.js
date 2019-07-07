const fs = require("fs");
console.log('Start reading file....');
const files = fs.readdirSync("./lib"); //this will do syncronizely 
console.log('Complete reading files. ');
console.log(files);