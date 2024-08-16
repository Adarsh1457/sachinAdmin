const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
    newAlerts: [{
        title: String,
        message: String,
        time: String,
        button1: String,
        button2: String,
        button3: String
    }],
    employeeGoals: [{
        icon: String,
        title: String,
        status: String,
        action: String
    }],
    employeeOverview: [{
        title: String,
        value: String,
        trend: String
    }],
    employeeProfiles: [{
        image: String
    }],
    notificationSystem: [{
        icon: String,
        title: String
    }],
    performanceInsights: [{
        title: String,
        progress: Number
    }],
    helpResources: [{
        title: String
    }]
});

module.exports = mongoose.model('Dashboard', DashboardSchema);