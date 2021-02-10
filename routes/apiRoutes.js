//dependencies
const express = require('express');
const { Schema } = require('mongoose');
const path = require('path');
const ApiRouter = express.Router();
const schema = require('../models/schema');
//routes
ApiRouter.get("api/workouts",(req,res) => {
    schema.find({})
    .sort({date: -1})
    .then((data) => {
        res.json(data);
    })
});

ApiRouter.post("api/workouts",(req,res) => {
    Schema.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

ApiRouter.put("api/workouts/:id",(req,res) => {
    const id = req.params.id;
    const workout = req.body;
    Schema.findByIdAndUpdate(id, { $push: { exercises: workout } }, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
});

ApiRouter.get("api/workouts/range",(req,res)=>{
    Schema.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
})

//export route
module.exports = ApiRouter;