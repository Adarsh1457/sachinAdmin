const express = require('express');
const router = express.Router();
const Dashboard = require('../models/Dashboard');

router.get('/dashboard', async (req, res) => {
    try {
        const dashboardData = await Dashboard.findOne();
        if (!dashboardData) {
            return res.status(404).json({ message: "Dashboard data not found" });
        }
        res.json(dashboardData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/dashboard', async (req, res) => {
    const dashboard = new Dashboard(req.body);
    try {
        const newDashboard = await dashboard.save();
        res.status(201).json(newDashboard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;