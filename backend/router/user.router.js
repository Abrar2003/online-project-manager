const express = require("express");
const User = require("../models/user.model");

const app = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    console.log("user", user);
    if (user) {
      res.send({
        success: true,
        message: "Valid User",
      });
    } else {
      res.send({
        success: false,
        message: "Invalid User",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
