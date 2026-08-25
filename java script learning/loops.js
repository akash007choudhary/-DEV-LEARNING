// brr= [[1,2,2],[23,45,4,7,,6]];
// console.log(brr);  // here size coudl also be different ;
// //  aray is also object tahts is type of arrays is object   

/// NORMLA FOR LOOP 
let arr = [ 1,2,3,4,5,6]
for ( let i = 0 ; i<6; i ++){
    console.log(arr[i]);
}

// FOR OF LOOP LIKE FOR EACH IN CPP:
//   for (const ele of arr) {
//     console.log(ele);
//   }



// for of loop used in case of arrays, strings as we dont have to think about the initalisation of iteratir and also the updation
// let d= "akash choudhary";
// for(let i of d){
//   console.log("i",i);
// }

 



// for in loop is used for objects
 let a = {
  name :"akash",
  section:"cse a "
 }

 for (let key  in a){
  console.log(key); // ye sirf keys deta naki values 
  console.log(a[key]);   // thsi is how we can acces values
}




     // any real number other than 0 is considered tru 
     // like 0 . 7 is also tru but 0 is false , 9.1 is also true 

     // if *** '' *** double quotes main daal diye kuch bhi to wo true hi hota hai like 
     // "false " ye bhi ek tru hai 
     // "null"  ye bhi true ahi 
    //  but if only null likhte to false ho jata !
    // falsy matlb 0 , null. Nan wagera 
    // truthy values matlb othertahn falsy 
    //undefined bhi false value hoti , matlb jab tyep defiend nhi hota tab uska type of undefined hota