// *** Here we're making more specific/usefull endpoints ***

// IMPORT express package (framework)
const express = require('express');

// make an instance of Express Router (initialize)
const router = express.Router();

const students = require('../controllers/students.controller.js');

// router executes on url path & Handler request (callback) from controller file
router.get("/", students.findAll);

// make 3 more endpoints for:
// status(200) = OK response / status(201) = resource has been created
// status(204) = OK deletion

// 1. get a specific student
router.get("/:id", students.find);

// 2. post (make) a new student
router.post("/", students.create);

// 3. delete a student
router.delete("/:id", students.destroy);



module.exports = router;
