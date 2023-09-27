//npm install express, mongoose, cors
const express = require('express');
const cors = require('cors') 
const app = express();

require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
require('./routes/project.routes');(app); //added a ; in the middle idk if that fixed it


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})