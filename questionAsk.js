const readline = require("readline"); //readline module

//creating interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//array of questions
const questions =[
    "What is your name?",
    "Where do you live?",
    "Do you like NodeJs?"
];

//collect answer function
const collectAnswer = (questions, done) =>{
    const answers = [];

    const[firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);//pushing answer to the answers array
        //condition to check if all the question is asked or not...
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