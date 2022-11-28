const express = require('express');

const router = express.Router();

const students = require('../controllers/students.controller.js');

router.get("/", students.findAll);

// 1. get a specific student
router.get("/:id", students.find);

// 2. post (make) a new student
router.post("/", students.create);

// 3. delete a student
router.delete("/:id", students.destroy);


module.exports = router;