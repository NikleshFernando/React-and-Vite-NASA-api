const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const session = require('express-session');
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT || 8070;

app.use(cors({
  origin:["http://localhost:5173"],
  methods:["POST","GET"],
  credentials:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(
 { secret:'secret',
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge:1000*60*60*24
  }
}
))

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongodb connection successful!");
});

const studentRouter = require("./routes/Users.js");

app.use("/User",studentRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number :${PORT}`);
});
