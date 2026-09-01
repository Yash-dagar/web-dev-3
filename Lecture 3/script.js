// const os = require('os');
// const math = require('./math.js');

// const axios=require('axios');

// console.log(math.add(5, 3));
// console.log(math.subtract(5, 3));

// console.log("Hello World");
import os from 'os';
console.log(os.cpus());

import {add,subtract} from './math.js';

console.log(add(5, 3));
console.log(subtract(5, 3));