const express= require("express");
const app= express();

console.dir(app);

let port= 3000;

app.listen(port,()=>{
    console.log("app is listening ");
})

// app.use((req,res)=>{
// console.log("request acepted");
// res.send("helo ur on the server and it runnig");
// })
// app.use sabke liye same response deta hai 



// yahan matlb /iske baad alag alag route hota hai like sirf / hai to matlb root path 
// these belowe are "" isman jo hai pehl are routes 

app.get("/apple/:varible_name",(req,res)=>{
    res.send("heloo apple");
    console.log(req.params);
})



app.get("/home",(req,res)=>{
    res.send("heloo home");
})
app.get("/{*splat}",(req,res)=>{
    res.send("heloo boy");
})

// aagr uper ke ksis path se alag search kiye to ye * matlb wala jo path exist nhi krta wo response dega 
app.get("/*splat",(req,res)=>{
    res.send("heloo cistromer");
})


// yahan send main we can send string or html page or any thing like obj/json format etc