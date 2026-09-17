const express = require("express");
const app = express();

const port = 3000;


// the middleware will execute even if the path is wrong.

// Important: Middleware doesn't care whether a final route exists. It runs according to how you registered the middleware. The route matching happens afterward.



// MIDDLEWARES SHOULD ALWAYS BE WRITTEN AT THE FIRST OF THE CODE AS EK BAAR RESPONSSE CHALA GYA TO EXECUTE NHI HOMNGE WO 


// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

// Root endpoint
app.get("/", (req, res) => {
    console.log("Root route");
    res.send("Hello User");
});

// Random endpoint
app.get("/random", (req, res) => {
    console.log("Random route");
    res.send("This is a random endpoint");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


// FLOW OF THE CONTROLL 

// GET /
//  ↓
// Middleware 1
//  ↓ next()
// Middleware 2
//  ↓ next()
// Root Route
//  ↓
// "Hello User"