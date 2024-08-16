document.addEventListener('DOMContentLoaded', function() {
    fetchEmployees();
    fetchNotifications();
    fetchUnusualActivities();
});

function fetchEmployees() {
    // In a real application, this would be an API call
    const employees = [
        { id: 1, name: 'John Smith', status: 'Present', avatar: 'avatar1.jpg' },
        { id: 2, name: 'Jane Doe', status: 'Absent', avatar: 'avatar2.jpg' },
        { id: 3, name: 'Mark Johnson', status: 'Late', avatar: 'avatar3.jpg' },
        { id: 4, name: 'Emily Davis', status: 'Present', avatar: 'avatar4.jpg' }
    ];

    const employeeList = document.getElementById('employeeList');
    employees.forEach(employee => {
        const card = document.createElement('div');
        card.className = `card employee-card ${employee.status.toLowerCase()}`;
        card.innerHTML = `
            <div class="card-body">
                <img src="${employee.avatar}" alt="${employee.name}" class="employee-avatar">
                <div class="employee-info">
                    <div class="employee-name">${employee.name}</div>
                    <div class="employee-status">${employee.status}</div>
                </div>
                <button class="btn btn-secondary btn-sm edit-btn" data-id="${employee.id}">Edit</button>
            </div>
        `;
        employeeList.appendChild(card);
    });
}

function fetchNotifications() {
    const notifications = [
        'Mark Johnson arrived late today.',
        'Jane Doe is absent today.'
    ];

    const notificationsElement = document.getElementById('notifications');
    notifications.forEach(notification => {
        const p = document.createElement('p');
        p.textContent = notification;
        p.className = 'mb-2';
        notificationsElement.appendChild(p);
    });
}

function fetchUnusualActivities() {
    const activities = [
        'Unusual check-in time detected for Emily Davis.'
    ];

    const activitiesElement = document.getElementById('unusualActivities');
    activities.forEach(activity => {
        const p = document.createElement('p');
        p.textContent = activity;
        p.className = 'mb-2';
        activitiesElement.appendChild(p);
    });
}

document.getElementById('editAttendance').addEventListener('click', function() {
    alert('Edit Attendance functionality would be implemented here.');
});

// Add event listeners for edit buttons
document.addEventListener('click', function(e) {
    if(e.target && e.target.className.includes('edit-btn')) {
        const employeeId = e.target.getAttribute('data-id');
        alert(`Edit functionality for employee ${employeeId} would be implemented here.`);
    }
});