 use("HospitalDB");

// db.doctors.insert([
//     {
//         name: "Rahul",
//         age: 30,
//         specilization: "Dermatologist",
//         salary: 600000,
//         fees: 500,
//         experience: 5,
//         department:"Dermatology"
//     },
//     {
//         name: "yash",
//         age: 30,
//         specilization: "Neurologist",
//         salary: 500000,
//         fees: 2000,
//         experience: 8,
//         department:"Neurology"
//     },
//     {
//         name: "kunal",
//         age: 30,
//         specilization: "Cardiologist",
//         salary: 150000,
//         fees: 1000,
//         experience: 15,
//         department:"cardiology"
//     },
//     {
//         name: "prashant",
//         age: 30,
//         specilization: "Haptologist",
//         salary: 150000,
//         fees: 1000,
//         experience: 10,
//         department:"Haptology"
//     }
// ])



// Aggregation Pipeline

db.doctors.aggregate([
    {
        $match: { 
            department: "cardiology"
        }
    }
     {
        $project: {
            name: 1,
            fees: 1,
            salary:1,
            experience:1,
            _id: 0
        }
    }
    ,{
        $group: {
            _id: "$department",
            totalSalary: { $sum: "$salary" },
            avgSalary: { $avg: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            totalDoctors: { $sum: 1 }
        }
    }
    ,{
        $sort: { 
            totalSalary: -1 
        }
    }

])

