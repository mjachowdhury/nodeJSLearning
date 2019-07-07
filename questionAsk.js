 const collectAnswers = require("./lib/collectAnswer");
//array of questions
const questions =[
    "What is your name?",
    "Where do you live?",
    "Do you like NodeJs?"
];
 
collectAnswers( questions, answers =>{
    console.log("Thank you for your answaer.");
    console.log(answers);
    process.exit();
});