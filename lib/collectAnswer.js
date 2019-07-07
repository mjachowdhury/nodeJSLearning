const readline = require("readline"); //readline module

const { EventEmitter } = require("events");

//creating interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
//now user can give any name they want as its a module function
//other file can use it
//f => f is a default function . if done function is not call then program will not break
module.exports = (questions, done = f => f) =>{
    const answers = [];
    const[firstQuestion] = questions;
    const emitter = new EventEmitter();
    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);//pushing answer to the answers array
        //condition to check if all the question is asked or not...
        if(answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }else{
            emitter.emit("complete", answers);
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    return emitter;
};
 