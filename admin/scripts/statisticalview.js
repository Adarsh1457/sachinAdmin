document.addEventListener('DOMContentLoaded', function() {
    fetchAttendanceData();
    fetchEvents();
});

function fetchAttendanceData() {
    fetch('/api/attendance')
        .then(response => response.json())
        .then(data => {
            renderAttendanceChart(data.overallRate);
            renderTrendsChart(data.trends);
        })
        .catch(error => console.error('Error fetching attendance data:', error));
}

function fetchEvents() {
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            const eventsList = document.getElementById('eventsList');
            events.forEach(event => {
                const li = document.createElement('li');
                li.textContent = `${event.name} - ${event.date}`;
                eventsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
}

function renderAttendanceChart(rate) {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Present', 'Absent'],
            datasets: [{
                data: [rate, 100 - rate],
                backgroundColor: ['#4CAF50', '#FF5252']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderTrendsChart(trends) {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: trends.map(t => t.date),
            datasets: [{
                label: 'Attendance',
                data: trends.map(t => t.rate),
                borderColor: '#4CAF50',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}