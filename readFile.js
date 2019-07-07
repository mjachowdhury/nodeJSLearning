const fs = require("fs");
//sys way of reading file
const text = fs.readFileSync('./lib/ReadMe.md', 'UTF-8');

console.log(text);
console.log('\n-------------------------------\n')
//asys way reading file. and it has to be call back function
fs.readFile('./lib/ReadMe.md','UTF-8', (err, text) => {
    if(err) {
        throw err;
    }
    //either if condition can use
    if(err){
        console.log(`An error occured : ${ err.message}`);
        process.exit();
    }
    console.log('File contents read');
    console.log(text);
});

//to read image file as binary
fs.readFile('./lib/flower.jpg', (err, img) => {
    if(err){
        console.log(`An error occured : ${ err.message}`);
        process.exit();
    }
    console.log(img);
});