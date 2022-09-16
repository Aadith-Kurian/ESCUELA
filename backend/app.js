const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

dotenv.config({path:"./.env"});

require('./db/conn');
app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth.js'));
app.use(cors());

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);