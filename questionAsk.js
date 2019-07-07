 const collectAnswers = require("./lib/collectAnswer");
//array of questions
const questions =[
    "What is your name?",
    "Where do you live?",
    "Do you like NodeJs?"
];
 
const answerEvents = collectAnswers( questions );

answerEvents.on("answer", answer => {
    console.log(`Question answered : ${answer}`);
});

answerEvents.on("complete", answers => {
    console.log("Thank you for your answaer.");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());