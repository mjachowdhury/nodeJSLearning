const fs = require("fs");
console.log('Start reading file....');
const files = fs.readdirSync("./lib"); //this will do syncronizely that means javascript will stop doing until it finish reading all the content that directory


//this way it will read asyncronizly... where javaScript will not wait to finish the reading contents
fs.readdir("./lib", (err, files) => {
    if(err) {
        throw err;
    }

    console.log('Complete reading files. ');
    console.log(files);

});
