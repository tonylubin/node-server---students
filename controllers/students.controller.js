const Student = require('../models/student');

const findAll = async (req, res) => {
    const students = await Student.findAll();
    res.status(200).send({ students });
}

const find = async (req, res) => {
    // req --> is the request parameter at the end of the url e.g. '/:id'
    // *** convert "id" from string to Number (for type conversion) by placing "+" in front of variable data because (URL: "TypeOf = String") ***
    const id = +req.params.id;
    const student = await Student.find(id);
    res.status(200).send({ student });
}

const create = async (req,res) => {
    // as we're creating a student we invoke an instance of the class Student
    // we're sending the data we want to use to create a new student instance in the request // object body parameter
    const newStudent = new Student(req.body);
    const message = await newStudent.save();
    res.status(201).send({ message });
}

const destroy = async (req,res) => {
    const id = +req.params.id;
    const message = await Student.destroy(id);

    // for testing purposes in POSTMAN use status(200)
    // can use status(204) -> action enacted, no further info to be supplied
    res.status(200).send({ message });    
}

module.exports = { find, findAll, create, destroy };