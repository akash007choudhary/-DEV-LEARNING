// Purpose of init.js
// init.js is used to populate a database with predefined initial or sample data without mixing database setup code with the main application code.

const mongoose = require("mongoose");
const chat= require("./models/chat.js");
main()
	.then(() => {
		console.log("connection is started");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allchats = [
    {
        from: "akash",
        to: "aadyaa",
        msg: "send me your photos bachaa",
        created_at: new Date()
    },
    {
        from: "aadyaa",
        to: "akash",
        msg: "Okay, I will send them",
        created_at: new Date()
    },
    {
        from: "akash",
        to: "rahul",
        msg: "Hey, are you coming today?",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "akash",
        msg: "Yes, I will come",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "aadyaa",
        msg: "Can you send me the notes?",
        created_at: new Date()
    }
];

chat.insertMany(allchats)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });
