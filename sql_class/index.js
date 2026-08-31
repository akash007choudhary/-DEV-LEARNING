const { faker } = require('@faker-js/faker');
// first way to connect to sql; 

const cors = require("cors");


const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


// Static files
app.use(express.static(path.join(__dirname, "public")));

// Parse request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const methodOverride = require("method-override");

app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const { v4: uuidv4 } = require("uuid");
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'akash'
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),

  ];
}


let q = "INSERT INTO user (id ,username,email,password) VALUES ? ";

// each time user main alkag alag daal ke run krenge as jo phle dale hinge wo alredy ja chyuka hoga database main 

// let user =[["123j","123_newjuser","newuser@gjmail.com","akjash"],["123g","123_newuserhj","newuser@gmail.comj","akashjk"]];




app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("an eror occured;");
  }

});


app.get("/users", (req, res) => {
  let a = `select * from user`;
  try {
    connection.query(a, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render("index.ejs", { result });
    });
  } catch (err) {
    console.log(err);
    res.send("some eror in database;");
  }
});


app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("an eror occured;");
  }
});

//UPDATE (DB) Route
app.patch("/users/:id", (req, res) => {

    let { id } = req.params;

    let { password: formPass, username: newUsername } = req.body;

    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {

        connection.query(q, (err, result) => {

            if (err) throw err;

            let user = result[0];

            if (formPass != user.password) {
                res.send("WRONG password");
            } else {

                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;

                connection.query(q2, (err, result) => {

                    if (err) throw err;

                    res.redirect("/users");

                });
            }
            
        });

    } catch (err) {
        console.log(err);
        res.send("Some error occurred");
    }
});


// let data = [];

// for(let i = 0 ;i<=100;i++){
//    data.push(createRandomUser());
// // }
// try{
// connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });
// }catch(err){
// console.log(err)
// }


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});









//                         **2nd way to connect to sql

// to aces mysqlo on the cli type this command and type password thenm youl acces the workbench like from cli
// & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p



// ANOTEHR METHOD TO USE SQL IS MAKING A FILE OF .SQL AND THEN CLI MAIN JAKE
// source filename.sql
// krke use krdenge execute the file  `