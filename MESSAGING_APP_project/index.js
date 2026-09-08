const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const chat= require("./models/chat.js");

const methodOverride = require("method-override");
const mongoose = require("mongoose");

main()
	.then(() => {
		console.log("connection is started");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Parse request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.get("/chats",async (req,res)=>{
	let chats = await chat.find();
	// console.log(chats);
	res.render("index.ejs",{chats});

});

app.get("/", (req, res) => {
	res.send("root is working");
});

app.get("/chats/new",(req,res)=>{
	res.render("new.ejs");
});

app.post("/chats", async (req, res) => {

    let { from, to, msg } = req.body;

    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
		date : new Date()
    });

    await newChat.save();

    res.redirect("/chats");
});
app.listen(port, () => {
	console.log(`Listening at port ${port}`);
});


app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let gotchat = await chat.findById(id);
    res.render("edit.ejs", { id: id, msg: gotchat.msg });
});

app.put("/chats/:id", async (req, res) => {

    let { id } = req.params;

    let { msg } = req.body;

    await chat.findByIdAndUpdate(id, {
        msg: msg
    },{runValidators:true,new :true});

    res.redirect("/chats");
});


app.delete("/chats/:id", async (req, res) => {

    let { id } = req.params;

    await chat.findByIdAndDelete(id);

    res.redirect("/chats");
});


