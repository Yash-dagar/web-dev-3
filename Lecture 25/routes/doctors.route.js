const express = require('express');
const mongoose = require('mongoose');

const doctorRoutes = require('./routes/doctors.routes.js');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', doctorRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})