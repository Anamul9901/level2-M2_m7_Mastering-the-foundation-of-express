//local modules
const {a, add} = require('./local-1')
const {a: a2, add: add2} = require('./local-2')


// console.log(add(1, 2));
// console.log(a);

// console.log(add2(1, 2,3));
// console.log(a2);



// build-in-modules
const path = require('path')

// console.log(path.dirname("/D:/projects/Level-2/Next level/M2_m7_Mastering-the-foundation-of-express/Learning-node/local-2.js"));

// console.log(path.parse("/D:/projects/Level-2/Next level/M2_m7_Mastering-the-foundation-of-express/Learning-node/local-2.js"));

console.log(path.join("/D:/projects/Level-2/Next level/M2_m7_Mastering-the-foundation-of-express/Learning-node", "local-2.js"));
