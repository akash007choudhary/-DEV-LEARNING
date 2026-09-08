
// document is row and collection is tabele

//Mongoose is a library for Node.js that makes it easier to work with MongoDB.

const mongoose = require('mongoose');

// test is the database name bydefault test hota hai we can also change it 
main()
    .then(() => {
        console.log("connection established");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//defining the schema of collection->>table:

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


// aise is the actuall format of writting things correctly in schema by using different methods and constraints
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },

//     age: {
//         type: Number,
//         min: 18,
//         max: 60
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true
//     }
// });




// model name is user created using collection user and the schema userschema
const User = mongoose.model("User", userSchema);


// NOTE : NAME BY THINKING CORRECLTY 
// Model:      User;
// Collection: users;

// Model name = singular
// Collection name = plural


// const user1 = new User({
//     name: "Akash",
//     email: "akash@gmail.com",
//     age: 19
// });

// save() returns a promise
// user1.save()
//     .then(() => {
//         console.log("User saved");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Every time you run:
// await user1.save();
// on a new User object, MongoDB will normally create another document with a new _id.



// Usually, you DON'T put seed/insert code there permanently.

// You can run it once to create initial data, then comment/delete it:
// User.insertMany([
    // {
    //     name: "Akash",
    //     email: "akash@gmail.com",
    //     age: 708
    // }
    // ,
//     {
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     age: 20
//     },
//     {
//         name: "Priya",
//         email: "priya@gmail.com",
//         age: 18
//     },
//     {
//         name: "Rohan",
//         email: "rohan@gmail.com",
//         age: 21
//     },
//     {
//         name: "Sneha",
//         email: "sneha@gmail.com",
//         age: 20
//     }
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });






// operation buffering 
// "Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB."

// as these all code would have been inise main.then min but due to it is allowed


// User.updateOne({ name: "Akash" }, { age: 45 })
//     .then((res) => {
//         console.log(res);
//     }).catch((e) => {
//         console.log(e);
//     });

// set is advidced to use jahan bhi update krenge 
// User.findOneAndUpdate(
//     { name: "Akash" },
//     { $set: { age: 201} },
//     // new matlb originally false hota hia but ise tru krdenge to server main after uodate dtaa show hoga naki phle find krke old dtaa dkhaya then internallu updytae kr diya 
//     // { new: false }
//     {new : true}
// )
// .then((res) => {
//     console.log(res);
// });




// User.findByIdAndDelete(yahan id pass krenge ).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e);
// });


User.findOneAndDelete({name:"Rahul"} ).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

// runValidators is a Mongoose option that tells Mongoose:

// "Run my schema validation rules even when I'm doing an update."

// matlb schema ka conmstriats are not genrelkaky valid for udpate to make it valid we need to set runValidators : true 
// User.updateOne(
//     { name: "Akash" },
//     { $set: { age: 10 } },
//     { runValidators: true }
// )
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });





// In Mongoose, a custom error usually means you define your own validation rule and your own error message, instead of relying only on built-in validators like min, max, or required.