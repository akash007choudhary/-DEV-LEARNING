// function twice(ele){

//     return 2 * ele;

// }
// let arr= [1,2,3,4,5,6];
// let brr= arr.map(twice); // aise we can use map

// console.log(brr);    ye new arr create kr dega , but for each nhi krta create 



// also there is another way to do it like the timeout way 
// let arr =[1,2,3,4];
// let brr= arr.map(function(ele){
//    return  ele*=2;
// });
// console.log(brr);
  // ye bhi ek tarika hai to do it 

  // ek aur way hai to do it using arrow fxn 
//   let arr =[1,2,3,4];
//  arr= arr.map((ele)=>{// ye jo => hai ye bhi use krskrte without writiing functioon 

//    return  ele*=2;
// });
// console.log(arr);



// SHORTCUT WAY TO WRITE IT 
let arr =[1,2,3,4];
let brr= arr.map((ele)=>  ele*=2);
console.log(brr);