use("Hospitaldb");

// CREATE 1 insert  2insertOne 3 insertMany
// db.doctors.insertMany([
//     {
//         name: "Dr. Amit",
//         age: 30,
//         specialization: "Dermatologist",
//         salary: 300000
//     },
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// ]);

// db.doctors.insertOne(
//     {
//         name: "Dr. Rahul",
//         age: 35,
//         specialization: "Cardiologist",
//         salary: 500000
//     }
// )

// READ Operations 1. find()  2. findOne()
// db.doctors.find();
// db.doctors.findOne()
// db.doctors.findOne({name: "Rakesh Sharma"})

// READ With condition
// db.doctors.find({
//      specialization: "Cardiologist"
// });
// db.doctors.findOne({name: "Rakesh sharma"})

// UPDATE
// db.Doctors.updateOne(
//     { name: "Dr. John Smith"
// }, 
//     { $set: { salary: 400000 } }
// );

db.Doctors.updateMany(
    { name: "Dr. John Smith"
}, 
    { $set: { salary: 400000,
        department: "Cardiology",
        experience: 10
     } }
);