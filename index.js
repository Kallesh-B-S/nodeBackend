require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI_LOCAL)

const express = require('express')
const app = express()

const port = process.env.SERVER_PORT | 3000;
app.listen(port, () => {
    console.log("Server Started...");
})