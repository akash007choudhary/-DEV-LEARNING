const express = require("express");
const path = require("path");
const app= express();


const port = 3000;



// ismain jitte style and js krn hi krdo 

app.use(express.static(path.join(__dirname,"/public/js"))); //In Express, static means serving static files like HTML, CSS, JavaScript, images, fonts, etc.   
// thse files are sent as they are exactly 

app.use(express.static(path.join(__dirname,"/public/css")));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views")); //ye line ka matlb ahhi view kahan hai uska exact path de rhe hai taki server jaahan se bhi run ho wo corrctly render hoi jaye 



//  TEHSE ALL ARE GET REQUESTS  means we will ask the browser to give some data and resposnse accridng to our nmeed 
app.get("/",(req,res)=>{
    res.render("home.ejs");  
});


// ye ab iss page ko rendner krega 
app.get("/roll",(req,res)=>{
    res.render("roll.ejs");  
});


app.get("/roll2", (req, res) => {
    let value = Math.floor(Math.random() * 6) + 1;
    res.render("roll2", { value });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
 




// AISE KRKE BACKEDND YA FILE SE DTAA KO ACCES KRNEGE
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    
    const instadata=require("./data.json");  // ye database se dtaa require krega 
const dta= instadata[username];

    if(dta){
         res.render("ig.ejs",{dta});
    }else{
        res.render("home.ejs");
    }
   
});





// static files 