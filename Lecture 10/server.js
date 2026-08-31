const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Employee data
const employees = [
    { empId: 1, name: "Prashant", salary: 500000, department: "IT" },
    { empId: 2, name: "Shree", salary: 200000, department: "HR" },
    { empId: 3, name: "Rahul", salary: 400000, department: "Finance" },
    { empId: 4, name: "Harsh", salary: 100000, department: "IT" },
    { empId: 5, name: "Yash", salary: 300000, department: "Sales" },
];

// ==========================================
// READ: Get all employees
// GET /employees
// ==========================================
app.get("/employees", (req, res) => {
    res.json({
        success: true,
        employees: employees
    });
});

// ==========================================
// READ: Get employee by ID
// GET /employees/:id
// ==========================================
app.get("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find(
        (employee) => employee.empId === id
    );

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    res.json({
        success: true,
        employee: employee
    });
});

// ==========================================
// CREATE: Add a new employee
// POST /employees
// ==========================================
app.post("/employees", (req, res) => {
    const { name, salary, department } = req.body;

    const newEmployee = {
        empId: employees.length + 1,
        name,
        salary,
        department
    };

    employees.push(newEmployee);

    res.status(201).json({
        success: true,
        message: "Employee created successfully",
        employee: newEmployee
    });
});

// ==========================================
// UPDATE: Update employee by ID
// PUT /employees/:id
// ==========================================
app.put("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const employee = employees.find(
        (employee) => employee.empId === id
    );

    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    const { name, salary, department } = req.body;

    employee.name = name;
    employee.salary = salary;
    employee.department = department;

    res.json({
        success: true,
        message: "Employee updated successfully",
        employee: employee
    });
});

// ==========================================
// DELETE: Delete employee by ID
// DELETE /employees/:id
// ==========================================
app.delete("/employees/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = employees.findIndex(
        (employee) => employee.empId === id
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    const deletedEmployee = employees.splice(index, 1);

    res.json({
        success: true,
        message: "Employee deleted successfully",
        employee: deletedEmployee[0]
    });
});

// Start server - only once and after all routes
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    
  
