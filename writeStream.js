const fs = require('fs');

const writeStream = fs.createWriteStream('./storage-files/myTxt.txt', 'UTF-8');

writeStream.write(`As salamu alykum. \n`);
writeStream.write('How are you');