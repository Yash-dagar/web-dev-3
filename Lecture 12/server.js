const express=require("express");
const app=express()
const PORT = 3000;
const employees=require("./data/employeeData.js")
const employeeRoutes=require("./routes/employeeRoutes.js")

app.use(employeeRoutes);

app.listen(PORT, ()=>{
    console.log("server is running on port 3000");
})