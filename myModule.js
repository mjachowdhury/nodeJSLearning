module.exports = "Mohammed";
let count = 0;

const inc = () => ++count;//increment function
const dec = () => --count; //decrement function

const getCount = () => count;

//exporting all the function through object
module.exports ={
    inc,
    dec,
    getCount
    
};

