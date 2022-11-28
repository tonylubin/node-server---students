const Student = require('../models/student');

const findAll = async (req, res) => {
    const students = await Student.findAll();
    res.status(200).send({ students });
}

const find = async (req, res) => {
    // *** convert "id" from string to Number (for type conversion) by placing "+" in front of variable data because (URL: "TypeOf = String") ***
    const id = +req.params.id;
    const student = await Student.find(id);
    res.status(200).send({ student });
}

const create = async (req,res) => {
    const newStudent = new Student(req.body);
    const message = await newStudent.save();
    res.status(201).send({ message });
}

const destroy = async (req,res) => {
    const id = +req.params.id;
    const message = await Student.destroy(id);

    res.status(200).send({ message });    
}

module.exports = { find, findAll, create, destroy };