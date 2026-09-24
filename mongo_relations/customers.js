const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// mogoose connected 
mongoose
  .connect("mongodb://127.0.0.1:27017/customerDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });



// order schema

const orderschema = new mongoose.Schema({
  item: String,
  price: Number,
});

// cstmer schema
const customerschema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
//   
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});


  // PRE middleware  not needed as we need to dlete the orders after we dlete a customer

// customerSchema.pre("save", function(next) {
//     console.log("Customer is about to be saved");
//     next();
// });

// POST middleware
// Mongoose Post Middleware for Customer Deletion:
// When a customer is deleted, a post middleware can be used to delete all orders belonging to that customer. The middleware gets the deleted customer document. If the customer has any orders, we use Order.deleteMany() with $in to delete all orders whose _id is present in the customer's orders array.
customerschema.post("findOneAndDelete", async function (customer) {
    if (customer && customer.order.length > 0) {
        let res = await order.deleteMany({
            _id: { $in: customer.order}
        });
        console.log(res);
    }
});

// modles for working with the collections
const customer = mongoose.model("customer", customerschema);
const order = mongoose.model("order", orderschema);


// adding info to db 
const addcust = async () => {
  let newcust = new customer({
    name: "akash",
    email: "akash.007chy@gmail.com",
    age: 22,
  });

  let neworder = new order({
    item: "colgate",
    price: 100,
  }
);
   newcust.order.push(neworder._id);
  await neworder.save();
 
  await newcust.save();
  console.log("added new customer ");
};



const delcust = async () => {
    let data = await customer.findByIdAndDelete("6ab55f319518c4feca08ad17");

    // console.log(data);
};
app.listen(3000, () => {
  console.log(`server is running at port ${port}`);
});

// addcust();
delcust();


// CURRENT FLOW :
//         Schema
//           ↓
//         Model
//           ↓
//      Create Customer
//           ↓
//      Create Order
//           ↓
//    neworder._id generated
//           ↓
// newcust.order.push(neworder._id)
//           ↓
//      save Order
//           ↓
//    save Customer
//           ↓
//        MongoDB

// For Customer → many Orders, putting customerId in Order is especially useful because a customer could potentially have thousands of orders; you don't want one Customer document growing indefinitely with a huge orders array.


// but we have opp here as we are using less order s

// In MongoDB, deleting an Order document is possible, but if the Order is referenced by a Customer, the reference (Order ID) may still remain inside the Customer document.

