const mongoose = require('mongoose');

const connectDB = mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Mongoose connected"); 
}).catch((err)=>{
    console.log(err);
})

module.exports = connectDB;