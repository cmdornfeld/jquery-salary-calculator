$(document).ready(onReady);

function onReady() {
    // click handler to add employee upon click event
    $('#add-employee').on('click', addEmployee);
    calcMonthlyCost();
    
}

// global variable for employee array
let employeeArray = [];

function addEmployee(event) {
    event.preventDefault();

    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#in-ID').val();
    let title = $('#in-title').val();
    let salary = $('#in-salary').val();


    employeeArray.push({
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        salary: salary
    })
    
    showEmployeeArray(employeeArray);
    // empty values of each field
    $('#first-name').val('');
    $('#last-name').val('');
    $('#in-ID').val('');
    $('#in-title').val('');
    $('#in-salary').val('');
}

function showEmployeeArray(array) {
    $('#employee-table').empty();
    for (let employee of array) {
        $('#employee-table').append(
            `<tr><td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>`
        )
    }
    
}