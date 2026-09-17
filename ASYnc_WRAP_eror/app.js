const express = require("express");
const app = express();
const ExpressError = require("./error");
const port = 3000;



// Route
app.get("/is", (req, res, next) => {
     throw new ExpressError(404, "Page not found");
   
});

// Valid route
app.get("/", (req, res) => {
   ashdb=basjkbd
//    for this eror the deasfult values are given 
});

// If no route matched
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// Custom Error Handler
// error handler middleware
app.use((err, req, res, next) => {
    // Take status and message from err. If they are missing, use the default values.
    let { status = 500, message = "Something went wrong" } = err;

    res.status(status).send(message);
    console.log(status,message);
});



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
}); 