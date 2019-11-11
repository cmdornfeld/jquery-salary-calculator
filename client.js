$(document).ready(onReady);

// global variable for employee array
let employeeArray = [];


function onReady() {
    // click handler to add employee upon click event
    $('#add-employee').on('click', addEmployee);
    $('#employee-table').on('click', '.delete', removeEmployee);
    let el = $('#budget-total');
    el.empty();
    el.append(budget);
    calcMonthlyCost();
    showEmployee(employeeArray);
    
}

function addEmployee(event) {
    // prevent the form from refreshing the page on submit
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
    
    showEmployee(employeeArray);
    // empty values of each field
    $('#first-name').val('');
    $('#last-name').val('');
    $('#in-ID').val('');
    $('#in-title').val('');
    $('#in-salary').val('');
    $('#first-name').focus();
    calcMonthlyCost();
}

function showEmployee(array) {
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

function removeEmployee() {
    console.log(this);
    
    let button = $(this);

    button.closest('tr').remove();
}

function calcMonthlyCost(array) {
    let totalSalary = 0
    for (let i = 0; i < array.length; i++) {
        totalSalary += Number(array[i].salary);
        
        let totalMonthlyBudget = totalSalary / 12

        let el = $('#budget-total');
    }
    $('#total-budget').append(totalMonthlyBudget);
}