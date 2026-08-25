// method 1
// function fun(ele){
//     if (ele%2==0){
//         return true;
//     }else{
//         return false ;
//     }
// }

// let arr = [1,2,3,4,5,6];

// let brr= arr.filter(fun);
// console.log(arr);
// console.log(brr);




// method 2 

// let arr = [1,2,3,4,5,6];

// let brr= arr.filter((ele)=>{
//       if (ele%2==0){          // ismain jo condition dena hia wo dalo : even you can use ternary opeeratoras 
//         return true;
//     }else{
//         return false ;
//     }
// });
// console.log(arr);
// console.log(brr);




//method 3 
// let arr = [1,2,3,4,5,6];

// let brr= arr.filter((ele)=>(ele%2!=0));  
// console.log(arr);
// console.log(brr);






//  reudce method bhi dkehna 

crr=[1,2,3,4,5,6]
const a=crr.reduce((res, curr)=>{
    return res+curr;
})
console.log(a);

// res is the firts value and curr is the second value at start , and then it does the opretaion and store it in the res ; 