const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask = ( i = 0 ) =>{
    process.stdout.write(`\n\n\n ${questions[i]}`); //stdout is is functon for showing output to the user
    process.stdout.write(` > `);
}

ask();

//with on functon we can get user input and it wil not stop the progeam. but when u put process.exit() then it will exit the program.
process.stdin.on("data", data => {
    process.stdout.write(`\n\n ${ data.toString().trim() } \n\n`); 
    process.exit();
});
