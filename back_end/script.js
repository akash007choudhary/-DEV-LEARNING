// let i = 0 ;

// for(i= 0 ; i < 5;i++ ){
//     console.log(i);
// }

// console.log(process.argv);

// process.argv[0] → Node.js executable path
// process.argv[1] → your JavaScript file path
// process.argv is a Node.js variable that stores the command-line arguments given when you run a JavaScript file.



// ksis file se export krna hia to usmain :-> 
// module.export= value(kuch bhi value );


// and jismain import krnaia hai whan 
// const a = require("./filename_only")  not file_name.js just anme 
// now we can use this , but if nothing is exported then by defualt it is a empty object but when we assifgn values we can change this 



// // if we need to export many things liek math operations doing fxns then amke then a object 
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// const math = {
//     add,
//     subtract,
//     multiply,
//     divide
// };

// module.exports = math;



// har jagah bhhi module .exports.mul=(a,b)=>{} aise kr skte 




// when differmnt directry se export krnahia 
const apple = require("./apple");
const orange = require("./orange");
const banana = require("./banana");

const fruits = {
    apple,
    orange,
    banana
};

module.exports = fruits;