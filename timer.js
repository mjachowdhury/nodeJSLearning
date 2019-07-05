const waitTime = 3000;
const waitInterval = 500; //mili sec
let currentTimne  = 0;

const inncrementTime = () => {
    currentTimne += waitInterval;
    console.log(`Waiting ${ currentTimne / 1000 } seconds`);
};

console.log(`setting a ${ waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("Done");
};
const interval = setInterval(inncrementTime, waitInterval);
//setTimeout function
setTimeout(timerFinished, waitTime);
