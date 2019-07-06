const name = require('./myModule');

const { inc, dec, getCount} = require("./myModule");

inc();
inc();
dec();

console.log(getCount());
console.log(name);