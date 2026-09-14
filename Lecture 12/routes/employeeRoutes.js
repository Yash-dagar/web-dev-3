const express=require("express");
const router=express.Router();
const {getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee} = require("../controller/employeeController.js");

//middleware
router.use(express.json());
//Read Operation
router.get("/employees",getEmployees) 
//employee get by their id
router.get("/employees/:id",getEmployeeById)
//create operation
router.post("/employees",createEmployee)
//update operation
router.put("/employees/:id",updateEmployee)
router.delete("/employees/:id",deleteEmployee)

module.exports=router;