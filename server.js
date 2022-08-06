'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 4001
const movie=require('./modules/movie');


app.get("/", handleHome);



function handleHome(req, res) {
    res.send("I am alive");
}


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
app.get('/movies', movie);