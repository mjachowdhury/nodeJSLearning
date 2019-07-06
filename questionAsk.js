const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions =[
    "What is your name?",
    "Where do you live?",
    "Do you like NodeJs?"
];

const collectAnswer = (questions, done) =>{
    const answers = [];

    const[firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered);
};
collectAnswer( questions, answers =>{
    console.log("Thank you for your answaer.");
    console.log(answers);
    process.exit();
});