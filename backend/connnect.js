const mongoose = require("mongoose");

const connectdb = () => {
  mongoose
    .connect(
      "mongodb+srv://abraraalam003:abraraalam003@cluster0.imxsjqh.mongodb.net/tpl?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectdb;
