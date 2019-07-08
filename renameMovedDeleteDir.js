const fs = require('fs');

//asyn way of deleting dir if inside the dir any files 
//it will delete at first al lthe files with fs.unlinkSync

fs.readdirSync('./deleteFolder').forEach(fileName => {
    fs.unlinkSync(`./deleteFolder/${ fileName }`);
});

//rename dir
fs.rmdir('./renameFolder', err => {
    if(err) {
        //throw err;
        console.log('No dir found :' `${err.message}`);
    }
    console.log('./ deleteFolder directory removed');
});