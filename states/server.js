const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

const sessionOptions = {
  secret: "akashisgreate",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

// Register route
// this is how data is saved and then rerived in different requests in a same sesiion so data ko store krke then retriev krna
app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;

  req.session.name = name;

  //   ye ek hi baar flash krega not more refresh kro and ye gayab
  req.flash("success", "User registered successfully!");

  res.redirect("/hi");
});

// Hi route
app.get("/hi", (req, res) => {
  let message = req.flash("success");

  res.send(`
        <h1>Hello ${req.session.name || "anonymous"}</h1>
        <p>${res.locals.success}</p>
    `);
});

// Profile route
app.get("/profile", (req, res) => {
  res.send("Welcome " + (req.session.username || "Guest"));
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app.get("/test", (req, res) => {
//     // here we can count how many times client request the server
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   req.session.username = "Akash";
//   res.send(
//     `Welcome ${req.session.username}, you have requested this page ${req.session.count} times.`,
//   );
// });
