const express = require("express");
const connectdb = require("./connnect");
const cors = require("cors");
const userRouter = require("./router/user.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await connectdb();
  console.log("server started on port 8080");
});
