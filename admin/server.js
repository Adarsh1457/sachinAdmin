const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/attendancemaster', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schemas
const employeeSchema = new mongoose.Schema({
    id: String,
    name: String,
    role: String,
    department: String,
    status: String
});

const attendanceSchema = new mongoose.Schema({
    date: String,
    employeeId: String,
    employeeName: String,
    status: Boolean
});

// Define models
const Employee = mongoose.model('Employee', employeeSchema);
const Attendance = mongoose.model('Attendance', attendanceSchema);

// Routes
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/attendance', async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find().sort('-date');
        res.json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'employee-management.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));