const waitTime = 5000;
const waitInterval = 500; //mili sec
let currentTimne  = 0;

const inncrementTime = () => {
    currentTimne += waitInterval;
    const percentage = Math.floor(( currentTimne / waitTime ) * 100 );
    process.stdout.clearLine();
    process.stdout.cursorTo(0); //will take the cursor to the first possition
    process.stdout.write(` waiting ... ${ percentage }%`);
    //console.log(`Waiting ${ currentTimne / 1000 } seconds`);
};

console.log(`setting a ${ waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("Done");
};
const interval = setInterval(inncrementTime, waitInterval);
//setTimeout function
setTimeout(timerFinished, waitTime);
