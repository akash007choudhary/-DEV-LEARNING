const express= require('express');
const app= express();
const port = 3000;
// but there if a middle ware is writte and it givs a respond then teh  root response "hello user " will not be used 


// logger middleware
app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time);
    next();
});



app.use((req,res)=>{
    let {query} = req.query;
    console.log(query);
    console.log("hi i am middleware");
    res.send("hieee this will be only print for any path or endpoint you define always ")
});


// ye jaise hi hum run krneeg to wo clog krke ruk jaega age kuch mhi kregas 

//  fxn of middlewares
// Middleware performs some processing on a request and then passes control to the next middleware/route using next().

// app.get(("/"),(req,res)=>{
//     res.send("hello user ");
// });


// this should be there at last so if kuch match nhi hua to ye 
app.use((req,res,next) =>{
    res.send("eror 404 page not found");
    
});



app.listen(port,()=>{
    console.log(`server is runniing at port ${port}`);
});


// example of path sepcific middleware 
// app.use("/akash", (req, res, next) => {
//     console.log("Akash middleware");
//     next();
// });

// app.get("/akash", (req, res) => {
//     res.send("Hello Akash");
// });

// Request /akash
//       ↓
// /akash Middleware
//       ↓ next()
// /akash Route get
//       ↓
// Hello Akash



// So middleware acts as a layer between the request and the protected API.

// In real applications, auth would usually verify something like a session, cookie, or JWT/token rather than a hard-coded true.


// middleware can also be apssed as a fxn and like route ke stah wo fxn ko pass kre like check and then if tru check then give sensitve response else no response 