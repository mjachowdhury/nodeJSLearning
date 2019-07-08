const fs = require('fs');

const writeStream = fs.createWriteStream('./storage-files/myTxt.txt', 'UTF-8');
const readStream = fs.createReadStream('./lib/Readme.md', 'UTF-8');

//with this it will write from lib dir file ReadMe.md file to storage-files myTxt.txt
readStream.pipe(writeStream);

//with this method it will write whatever we type on the terminal
// process.stdin.on('data' , data => {
//     writeStream.write(data);
// });

//this will write to the file
//writeStream.write(`As salamu alykum. \n`);
//writeStream.write('How are you');