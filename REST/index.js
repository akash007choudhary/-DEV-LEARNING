// baisc express template to run servcer and work coreectlty 

const cors = require("cors");


const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Parse request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});


const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(cors());

const { v4: uuidv4 } = require("uuid");

let posts = [
    {
        id: uuidv4(),
        username: "akash",
        content: "Learning Express.js"
    },
    {
        id: uuidv4(),
        username: "rahul",
        content: "Just completed my first project!"
    },
    {
        id: uuidv4(),
        username: "priya",
        content: "JavaScript is fun to learn."
    },
    {
        id: uuidv4(),
        username: "rohit",
        content: "Building a REST API today."
    },
    {
        id: uuidv4(),
        username: "neha",
        content: "Started learning MongoDB."
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");

});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // == bcoz its a interger vale if strng hoat to use ===;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    post.content = newcontent;
   res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) =>p.id=== id);
    res.render("edit.ejs", { post});
});

 
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;

    posts = posts.filter((p) => p.id !== id);

    res.redirect("/posts");
});
