use("Hospitaldb");

// db.Doctors.find()

// db.Doctors.insert({
//     name:"Dr. John Smith",
//     specialization:"Cardiologist",
//     experience:15,
//     fees:1000,
//     salary:200000,
//     department:"Cardiology",
// })
 use("Hospitaldb");
const doctors = db.Doctors.find();
doctors.forEach(doctor => {
    print(`Name: ${doctor.name}`);
    print(`Specialization: ${doctor.specialization}`);
    print(`Experience: ${doctor.experience} years`);     
    print(`Fees: $${doctor.fees}`);
    print(`Salary: $${doctor.salary}`);
    print(`Department: ${doctor.department}`);});
    print("--------------------------------------------------");    
    print("Total number of doctors: " + doctors.count());