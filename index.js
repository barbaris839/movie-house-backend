const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.SERVER_PORT;

app.use(require("./router/api"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app;