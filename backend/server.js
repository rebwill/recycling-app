// IMPORTS

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

// DOTENV CONFIG

dotenv.config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// MONGOOSE CONFIG

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch(err => {
    console.log(err);
  });

// START SERVER

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});

// ----------------------------

// const express = require("express");

// const bodyParser = require("body-parser");
// const cors = require("cors");

// const Item = require("./itemModel");

// // MIDDLEWARE

// app.use(cors());
// app.use(bodyParser.json());

// // ROUTES

// const itemRoutes = express.Router();
// app.use("/items", itemRoutes);

// itemRoutes.route("/").get((req, res) => {
//   Item.find((err, items) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(items);
//     }
//   });
// });

// itemRoutes.route("/add").post((req, res) => {
//   console.log(req.body);
//   let item = new Item(req.body);
//   item
//     .save()
//     .then(item => {
//       res.status(200).json({
//         item: "item added successfully"
//       });
//     })
//     .catch(err => {
//       res.status(400).send("adding new item failed");
//     });
// });

// DATABASE=mongodb+srv://rebwill:<password>@cluster0-xpv6i.mongodb.net/miarecycling?retryWrites=true&w=majority
// DATABASE_PASSWORD=3nytiuRPy4wunAA
