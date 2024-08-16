document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/dashboard')
        .then(response => response.json())
        .then(data => {
            document.getElementById('newAlerts').innerHTML = generateNewAlertsHTML(data.newAlerts);
            document.getElementById('employeeGoals').innerHTML = generateEmployeeGoalsHTML(data.employeeGoals);
            document.getElementById('employeeStats').innerHTML = generateEmployeeOverviewHTML(data.employeeOverview);
            document.getElementById('employeeProfiles').innerHTML = generateEmployeeProfilesHTML(data.employeeProfiles);
            document.getElementById('notificationSystem').innerHTML = generateNotificationSystemHTML(data.notificationSystem);
            document.getElementById('performanceInsights').innerHTML = generatePerformanceInsightsHTML(data.performanceInsights);
            document.getElementById('helpResources').innerHTML = generateHelpResourcesHTML(data.helpResources);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function generateNewAlertsHTML(alerts) {
    return alerts.map(alert => `
        <div class="alert alert-secondary">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h6>${alert.title}</h6>
                    <p class="mb-0">${alert.message}</p>
                </div>
                <span class="text-muted">${alert.time}</span>
            </div>
            <div class="mt-2">
                <button class="btn btn-sm btn-outline-primary">${alert.button1}</button>
                <button class="btn btn-sm btn-outline-secondary">${alert.button2}</button>
                <button class="btn btn-sm btn-outline-danger">${alert.button3}</button>
            </div>
        </div>
    `).join('');
}

function generateEmployeeGoalsHTML(goals) {
    return goals.map(goal => `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
                <i class="${goal.icon} me-2"></i>
                <span>${goal.title}</span>
            </div>
            <div>
                <span class="me-2">${goal.status}</span>
                <button class="btn btn-sm btn-outline-primary">${goal.action}</button>
            </div>
        </div>
    `).join('');
}

function generateEmployeeOverviewHTML(overview) {
    return `
        <div class="circle mb-3">Rea</div>
        <div>Mobile-</div>
        ${overview.map(stat => `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span>${stat.title}</span>
                <span class="badge ${stat.trend === 'up' ? 'bg-success' : 'bg-danger'}">
                    ${stat.value} ${stat.trend === 'up' ? '↑' : '↓'}
                </span>
            </div>
        `).join('')}
    `;
}

function generateEmployeeProfilesHTML(profiles) {
    return profiles.map(profile => `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center">
                <img src="${profile.image}" alt="Employee" class="rounded-circle me-2" width="40" height="40">
                <span>Employee</span>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-primary me-1">View</button>
                <button class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
        </div>
    `).join('');
}

function generateNotificationSystemHTML(notifications) {
    return notifications.map(notification => `
        <div class="mb-3">
            <i class="${notification.icon} me-2"></i>
            <span>${notification.title}</span>
        </div>
    `).join('');
}

function generatePerformanceInsightsHTML(insights) {
    return insights.map(insight => `
        <div class="mb-3">
            <p class="mb-1">${insight.title}</p>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${insight.progress}%" aria-valuenow="${insight.progress}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    `).join('');
}

function generateHelpResourcesHTML(resources) {
    return resources.map(resource => `
        <button class="btn btn-outline-secondary mb-2 w-100">${resource.title}</button>
    `).join('');
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.createElement('button');
    toggleSidebar.textContent = '☰';
    toggleSidebar.className = 'btn btn-primary d-md-none';
    toggleSidebar.style.position = 'fixed';
    toggleSidebar.style.top = '10px';
    toggleSidebar.style.left = '10px';
    toggleSidebar.style.zIndex = '1001';
    document.body.appendChild(toggleSidebar);

    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        if (sidebar.classList.contains('show')) {
            mainContent.style.marginLeft = sidebar.offsetWidth + 'px';
        } else {
            mainContent.style.marginLeft = '0';
        }
    });

    // Hide sidebar when clicking outside on small screens
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 767 && !sidebar.contains(event.target) && event.target !== toggleSidebar) {
            sidebar.classList.remove('show');
            mainContent.style.marginLeft = '0';
        }
    });

    // Adjust layout on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            sidebar.classList.remove('show');
            mainContent.style.marginLeft = sidebar.offsetWidth + 'px';
        } else {
            mainContent.style.marginLeft = '0';
        }
    });
});