const findAll = {
    tags: ["Students"],
    description: "GET all students - receive a list of all students",
    operationId: "findAll",
    responses: [{
        200: {
            description: "The students were retrieved",
            content: "application/json"
        }
    }]
}

const find = {
    tags: ["Students"],
    description: "GET a student - receive a particular student using their id",
    operationId: "find",
    parameters: [{
      in: "path",
      name: "id",
      schema: {
          type: "string",
      },
      required: "true",
      description: "The student id"  
    }],
    responses: [{
        200: {
            description: "The student was retrieved",
            content: "application/json"
        }
    }]
}

const create = {
    tags: ["Students"],
    description: "POST a student - adds a student to a list of students",
    operationId: "create",
    responses: [{
        201: {
            description: "The students was successfully created",
            content: "application/json"
        }
    }]
}

const destroy = {
    tags: ["Students"],
    description: "DELETE one student - remove a student from the list of students using its id",
    operationId: "destroy",
    parameters: [{
        in: "path",
        name: "id",
        schema: {
            type: "string",
        },
        required: "true",
        description: "The student id"  
      }],
    responses: [{
        202: {
            description: "The students was successfully deleted",
            content: "application/json"
        }
    }]
}

module.exports = { findAll, find, create, destroy};