//  // aise object create krte js main  like maps (key - value pairs )
 
// we can also cahnge values of const objs keys 
 let obj = {
    name : " Akash ",
    class: "engn. 2nd year ",
    "nickname": "akkuu",    // this is also possible
    rollno: 2402040011,
    branch: "cse"
 };
 console.log(obj);
 console.log(obj.class);
 console.log(obj["nickname"])
 
//  console.log(obj.class,obj.name,obj.nickname);  // obj["nickname"]   <<<----- ye krna mostly 

//   // aise object create krte js main  like maps (key - value pairs )
 

//  console.log(obj["class"]);    // you can even do this as all keys are sto0red as a string in the memeory

 obj.name= "raul";
 console.log(obj);


 //              ------ for in loop-----------

// to print key 
//  for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//  console.log(key)    
//     }
// }

// to print the values 
//   for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//  console.log(obj[key])    
//     }
// }
// // sath ,main print
//  for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//  console.log(key,obj[key])    
//     }
// }

// also for in use kr skte but not much used 
 
 