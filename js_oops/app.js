// // factory function as it makes a object nthing much used 


// function abc(name,age){
//     const person={
//         name: name,
//         age: age,
//         talk(){
//             console.log("i am talking ");
//         }
//     };

//     return person;
// }
// let p1= abc("akash",21);
// let p2= abc("akasho",21);

// // ye bana diaya ek ibj for p1 and simiary we can make othertoo; by this we can many persons like in oops but not used this now 

// // as also teh talk function well be made in memeory all time diffret ones   *thus not good to use factory fxns;
// p1.talk===p2.talk;   // ye false hai 







// CONSTRUCTORES; BY CONVETION  DOES OT RETURN ANY THING AND ALSO STARTS WITH CAPITLA LETTER;   BUT IT CAN SYTACTICALLY 

// function Abc(name,age){
//         this.name= name,
//         this.age= age

// }  
// by using new keyword we can create instance eg p3 qn p4 of the constructpr 


// STEPS OF WORKING OF NEW
// Creates a new empty object
// Links it to Abc.prototype
// Calls Abc() with this referring to the new object
// Returns the new object

// Abc.prototype.talk=function(){
//     console.log(`hi ${this.name} spealing `);
// };


// let p3 =new Abc("aksh",21);
// let p4 =new Abc("akshhaksi",21);

// p3.talk===p4.talk;  this will be tru thus memeory efficent 



// SAME WORK JSUT SYNTAX DIFENRTT USING CLASS


class Abc {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi ${this.name} speaking`);
    }
}

let p5 = new Abc("aksh", 21);
let p6 = new Abc("akshhaksi", 21);