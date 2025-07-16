const express = require('express');
require("dotenv").config();
const database = require("./config/database");

const route = require("./api/v1/routes/index.route");

database.connect();

const app = express()
const port = process.env.PORT;

//Router
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});