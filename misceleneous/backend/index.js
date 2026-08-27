const express= require("express");
const app= express();
const port = 3000;

// to let express parse data into its readabel format 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register",(req,res)=>{
    // Those {} are object destructuring. You're basically saying:
// "Take the values named user and password from req.query and put them into variables with those names."

// jo bhi inout ka name higa 
    let {username,pass}=req.query;
    res.send(`standard get response ${username}`);
});


app.post("/register",(req,res)=>{
    console.log(req.body);
     let {username,pass}=req.body;
    res.send(`standard post response ${username}`);
});

app.listen(port,()=>{
    console.log(`listening on port ${port} `);
});