// sorting in ascending order :
// let arr = [1,2,9,4,7,6];
// console.log(arr);
// arr= arr.sort();   
// console.log(arr);

// js ka built in sort bahut galat answers deta in case of negative  


// decreasing order 
//YE CORRECT SORTING DETA
// let arr = [1,2,9,4,7,6];
// console.log(arr);
// arr= arr.sort((a,b)=>(b-a));   
// console.log(arr);




// increasing order 
//YE CORRECT SORTING DETA
// let arr = [1,2,9,4,7,6];
// console.log(arr);
// arr= arr.sort((a,b)=>(a-b));   // argument bas change kr skte hai 
// console.log(arr);
    


// alwasy use a - b and b - a technic 



// also jab custom comaprator laagte 


// aise bhi daal sakte 
let arr = [1,-2,-9,4,7,-6];
arr= arr.sort((a,b)=> Math.abs(a)- Math.abs(b));
console.log(arr);
   // argument bas change kr skte hai 
console.log(arr);