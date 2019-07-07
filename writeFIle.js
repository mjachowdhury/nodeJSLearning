const fs = require('fs');

const md = `
    #This is a new File
    we can write text to a file with fs.writeFile

    * fs.readdir
    * fs.readFile
    * fs.writeFile
`;

fs.writeFile('./lib/notes.md', md.trim(), err => {
    if(err){
        throw err;
    }
    console.log('File saved');
});