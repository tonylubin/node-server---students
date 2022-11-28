// *** Making of our own API (a user would enter url with ENDPOINT e.g. "localhost:3000/api") ***

// ******* command to run application in DEV mode is "NPM RUN WATCH" ********

//  importation of Express (framework) & Swagger UI
const express = require('express');
const swaggerUi = require('swagger-ui-express');

// import swagger document
const swaggerDocument = require('./config/swagger.js');

const router = require('./routes/students.js');

// initilisation of Express
const app = express();

// PORT CONFIGURATION
const port = process.env.PORT || 3000;

// need to specify the format of the data, which is JSON (Parse it)
app.use(express.json());

// this line of code MUST be before "apt.get()"
// the root endpoint
// here we are --> telling our app(express framework) to USE 2 arguments:
// 1. use specified endpoint as the ROOT ENDPOINT
// 2. use the file ROUTER (imported from above)
app.use('/api/students', router);

// add route for Swagger docs (route, boot-up swagger package/instance, swaggerUI set-up with swagger document)
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// add 404 route (placed at bottom, "*" is for all other routes)
app.get("*", (req, res) => res.status(404).send("<h1>There is no content at this route !!!</h1>"));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});