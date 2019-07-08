const cp = require('child_process');

//with tjhis it will open a website..
cp.exec("open http://www.linkedin.com/learning");

//it will open a new instance of terminal
cp.exec('open -a Terminal .');

//this will show all the dir contents on terminal
cp.exec('ls' , (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
});