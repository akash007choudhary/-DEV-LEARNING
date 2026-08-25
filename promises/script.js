// let tea = new Promise((resolve,reject) =>{
//     let tearedy= true;

//     if(tearedy){
//         resolve("tea is ready");
//     }else{
//         reject("tea is nto redy ")
//     }
// });


// tea.then((result) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });





// then ka matlb jab succesful hoga to kaam krgea nhi to erro ko catch handle krega

// there are multiple try and singel catch for promise chainng 



// saveToDBPromise("apanacollege")
//     .then(() => {
//         console.log("promise1 resolved");
//         return saveToDBPromise("hello world");    ye return krega ek promise and usi pe ham age uss then pe again then krenge  
//     })
//     .then(() => {
//         console.log("promise2 resolved");
//     })
//     .catch(() => {
//         console.log("some promise rejected");
//     });




// promise main chaining main varibales bhi dalte hai for oen api cal then only second one call hiiga wasie 



function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num =Math.floor(Math.random() *10 )+1;
            console.log(num);
            resolve();
        },2000);
    });
}
async function demo() {
    await getnum();
    await getnum();
    await getnum();
    await getnum();
}

