const students = require('../docs/student.swagger.js');

const swaggerDocument = {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: "Tony's Node API",
            description: "The documentation for the _nology self-paced course API, designed to showcase server-side programming",
            contact: {
                name: "Tony",
                email: "tonylubin78@gmail.com",
                url: "http://expressjs.com"
            }
        },
        servers: [{
            url: "http://localhost:3000",
            description: "Local Server"
        }],
        tags: [{
            name: "Students"
        }],
        paths: {
            "/api/students": {
                get: students.findAll,
                post: students.create
            },
            //add {id} instead of /:id
            "/api/students/{id}": {
                get: students.find,
                delete: students.destroy
            }
        }
}

module.exports = swaggerDocument;