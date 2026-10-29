javascript
const express = require('express');
const app = express();
const port = 3000;

const Doctor = require('./model/doctor.model');
const mongoose = require('mongoose');

// Read: Get all doctors
app.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get doctor by ID
app.get('/doctor/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(404).json({
                message: 'Doctor not found'
            });
        }

        res.json(doctor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/hospitalDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Database connection error:', err.message);
    });

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});