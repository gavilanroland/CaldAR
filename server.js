const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routers/api/items")

const app = express();

//bodyparser Midelware

app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect with mongo DB
mongoose
    .connect(db)
    .then(()=> console.log("Mongo DB Conected"))
    .catch(err=> console.log(err));

//use Routes
app.use("/api/items", items);

//PORT

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));