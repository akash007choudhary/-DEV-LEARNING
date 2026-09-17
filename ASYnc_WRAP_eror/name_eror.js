const express = require("express");
const app = express();

const port = 3000;


// Specific error handler functions

function handleCastError(err, req, res, next) {
    res.status(400).send("Invalid ID");
}

function handleValidationError(err, req, res, next) {
    res.status(400).send("Invalid data");
}

function handleDuplicateError(err, req, res, next) {
    res.status(400).send("Duplicate data");
}


// Routes

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/test", (req, res) => {
    throw new Error("Something went wrong");
});


// Main error handling middleware

app.use((err, req, res, next) => {

    if (err.name === "CastError") {
        return handleCastError(err, req, res, next);
    }

    if (err.name === "ValidationError") {
        return handleValidationError(err, req, res, next);
    }

    if (err.code === 11000) {
        return handleDuplicateError(err, req, res, next);
    }

    res.status(500).send("Something went wrong");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Here:

// err.name → tells what type of error occurred.
// handleCastError() → handles that specific error.
// return → prevents the code from continuing to other handlers.