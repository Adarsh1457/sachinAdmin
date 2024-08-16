document.addEventListener('DOMContentLoaded', function() {
    fetchEmployees();
    fetchAttendanceRecords();

    document.getElementById('addEmployee').addEventListener('click', addEmployee);
    document.getElementById('generateReports').addEventListener('click', generateReports);
    document.getElementById('assignUserRoles').addEventListener('click', assignUserRoles);
    document.getElementById('searchEmployees').addEventListener('input', filterEmployees);
    document.getElementById('statusFilter').addEventListener('change', filterEmployees);
    document.getElementById('departmentFilter').addEventListener('change', filterEmployees);
});

function fetchEmployees() {
    fetch('/api/employees')
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';
            employees.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.role}</td>
                    <td>${employee.department}</td>
                    <td>${employee.status}</td>
                    <td><button class="btn btn-success btn-sm view-profile" data-id="${employee.id}">View Profile</button></td>
                `;
                employeeList.appendChild(row);
            });
            addViewProfileListeners();
        })
        .catch(error => console.error('Error fetching employees:', error));
}

function fetchAttendanceRecords() {
    fetch('/api/attendance')
        .then(response => response.json())
        .then(records => {
            const attendanceRecords = document.getElementById('attendanceRecords');
            attendanceRecords.innerHTML = '';
            records.forEach(record => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${record.date}</td>
                    <td>${record.employeeId}</td>
                    <td>${record.employeeName}</td>
                    <td><input type="checkbox" ${record.status ? 'checked' : ''} disabled></td>
                `;
                attendanceRecords.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching attendance records:', error));
}

function addEmployee() {
    // Implement add employee functionality
    alert('Add employee functionality to be implemented');
}

function generateReports() {
    // Implement generate reports functionality
    alert('Generate reports functionality to be implemented');
}

function assignUserRoles() {
    // Implement assign user roles functionality
    alert('Assign user roles functionality to be implemented');
}

function filterEmployees() {
    const searchTerm = document.getElementById('searchEmployees').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const departmentFilter = document.getElementById('departmentFilter').value;
    
    const rows = document.getElementById('employeeList').getElementsByTagName('tr');
    
    for (let row of rows) {
        const name = row.cells[1].textContent.toLowerCase();
        const department = row.cells[3].textContent;
        const status = row.cells[4].textContent;
        
        const matchesSearch = name.includes(searchTerm);
        const matchesStatus = statusFilter === '' || status === statusFilter;
        const matchesDepartment = departmentFilter === '' || department === departmentFilter;
        
        row.style.display = matchesSearch && matchesStatus && matchesDepartment ? '' : 'none';
    }
}

function addViewProfileListeners() {
    const viewButtons = document.getElementsByClassName('view-profile');
    for (let button of viewButtons) {
        button.addEventListener('click', function() {
            const employeeId = this.getAttribute('data-id');
            viewProfile(employeeId);
        });
    }
}

function viewProfile(employeeId) {
    // Implement view profile functionality
    alert(`View profile for employee ${employeeId} to be implemented`);
}