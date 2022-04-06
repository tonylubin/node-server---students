// *** Making of our own API (a user would enter url with ENDPOINT "/api") ***

// ******* command to run application is "NPM RUN WATCH" ********

//  importation of Express (framework) & Swagger UI
const express = require('express');
const swaggerUi = require('swagger-ui-express');

// import swagger document
const swaggerDocument = require('./config/swagger.js');

const router = require('./routes/students.js');

// utilisation of Express (and running it)
const app = express();

// specification of PORT (or an alternative e.g. 3000) / PORT CONFIGURATION
const port = process.env.PORT || 3000;

// need to specify the format of the data, which is JSON
app.use(express.json());

// this line of code MUST be before "apt.get()"
// the root endpoint
// here we are --> telling our app(express framework) to USE 2 arguments:
// 1. use specified endpoint as the ROOT ENDPOINT
// 2. use the file ROUTER (imported from above)
app.use('/api/students', router);

// making a GET request with the ENDPOINT that we want (base/root endpoint)
app.get('/api', (req, res) => {
    res.send("Welcome to my API!!!")
});

// add route for Swagger docs (route, boot-up swagger package/instance, swaggerUI set-up with swagger document)
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// add 404 route (placed at bottom, "*" is for all other routes)
app.get("*", (req, res) => res.status(404).send("There is no content at this route"));

// run server & instruct it to listen
// port variable above(actual port we want)
// req = request, res = response
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
});