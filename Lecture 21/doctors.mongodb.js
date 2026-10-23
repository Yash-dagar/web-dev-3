// 1. Switch to the database
use("Hospitaldb");

// ==========================================
// CREATE Operations
// ==========================================

// Insert multiple documents
db.Doctors.insertMany([
    {
        name: "Dr. Amit",
        age: 30,
        specialization: "Dermatologist",
        salary: 300000
    },
    {
        name: "Dr. Rahul",
        age: 35,
        specialization: "Cardiologist",
        salary: 500000
    }
]);

// Insert a single document
db.Doctors.insertOne({
    name: "Dr. Rahul",
    age: 35,
    specialization: "Cardiologist",
    salary: 500000
});


// ==========================================
// READ Operations (Updated to match your actual data)
// ==========================================

// View all documents
db.Doctors.find();

// View a single document
db.Doctors.findOne();

// Find by existing fields and exact case
db.Doctors.find({ specialization: "Dermatologist" });

db.Doctors.find({ degree: "Engineer" });


// ==========================================
// UPDATE Operations 
// ==========================================

db.Doctors.updateOne(
    { name: "Yash" }, 
    { $set: { salary: 5500000 } }
);


// ==========================================
// ADVANCED FILTERING & OPERATORS (Fixed to match your fields)
// ==========================================

// Greater than ($gt) query for age
db.Doctors.find({
    age: {
        $gt: 30
    }
});

// Logical OR query using your actual stored fields/cases
db.Doctors.find({
    $or: [
        { degree: "Engineer" },
        { specialization: "Dermatologist" }
    ]
});