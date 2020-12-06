const express = require("express");
const boilers = require("../models/boilers");
const router = express.Router;

//Items model

const Boilers = require("../models/boilers");

// @route GET api/items
// @desc All items
// @access Public
routes.get("/", (req, res)=>{
    Boilers.find()
    .sort({date:-1})
    .then(boilers => res.json(boilers))
}) 
// @route POST api/items
// @desc Create a Post
// @access Public
routes.post("/", (req, res)=>{
  const newBoilers = new boilers({
      name: req.body.name
  });
  newBoilers.save().then(boilers => res.json(boilers));
}) 

module.exports = routes;
