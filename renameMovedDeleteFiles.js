const fs = require('fs');

//syn version
fs.renameSync('./assets/color.json', './assets/colorData.json');

//asyn version
fs.rename('./lib/notes.md', './storage-files/notes.md', err => {
    if(err) {
        throw err;
    }
});

//4 sec wait function and delete a file

setTimeout(() => {
    fs.unlinkSync('./assets/flower.jpg');
}, 4000);

