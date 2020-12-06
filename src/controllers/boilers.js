const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const boilers = require(".././routes/boilers")

const app = express();

//bodyparser Midelware

app.use(bodyParser.json());

//DB Config
const db = require("../config/keys").mongoURI;

//Connect with mongo DB
mongoose
    .connect(db)
    .then(()=> console.log("Mongo DB Conected"))
    .catch(err=> console.log(err));

//use Routes
app.use("./models/boilers", items);

//PORT

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));