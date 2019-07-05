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

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim()); // here pusing to the pusing function and adding the user answer to the answers array
    //process.stdout.write(`\n\n ${ data.toString().trim() } \n\n`); 
    if(answers.length < questions.length) { //here checking the length of hte question as wel las answer
        ask(answers.length);
    }else{
        process.exit();
    }
    
});


// exit listner the programm nicelly
 process.on("exit", () => {
    const [name, activity, language] = answers;
    console.log(`
    
    Thank you for your answer.
    Go ${ activity }  ${ name  } you can write ${ language } code later!!!
    
    `);
 });