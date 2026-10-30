const { default: mongoose } = require("mongoose");
const mpngoose=require("mongoose");
const Schema=mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        require:true
    },
    specilization: {
        type: Number,
        require:true
    },
    fees: {
        type: Number,
        require:true
    },
    salary: {
        type: Number,
        require:true
    },
    name: {
        type: String,
        require:true
    }
});

module.exports = mongoose.model('doctors', doctorSchema);