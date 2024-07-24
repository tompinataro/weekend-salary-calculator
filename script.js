
// -- GLOBAL VARIABLE TO KEEP TRACK OF THE TOTAL ANNUAL SALARY ------------- //

let totalAnnualSalary = 0

// -- FUNCTIONS THAT ARE CALLED IN RESPONSE TO CLICK EVENTS ---------------- //
  // -- Handles the "Submit" button being clicked:

function handleSubmit(event) {
  event.preventDefault();

  const newEmployee = getNewEmployeeInfo();
  
  addNewEmployeeTableRow(newEmployee);

  resetNewEmployeeForm();

  updateTotalMonthlySalary(newEmployee.annualSalary);
}

  // -- Handles a table row's "Delete" button being clicked:
  function removeEmployee(event) {
    let clickedButton = event.target;
    let trToRemove = clickedButton.parentElement.parentElement;
    trToRemove.remove();
}

// -- "HELPER FUNCTIONS" FOR `handleSubmit` -------------------------------- //
  // Returns an object that contains the data the user typed into
  // the inputs, 

  function getNewEmployeeInfo() {
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let employeeId = document.getElementById('employeeIdInput').value;
    let title = document.getElementById('titleInput').value;
    let annualSalaryAsNumber = Number(document.getElementById('annualSalaryInput').value);

    return {
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        title: title,
        annualSalary: annualSalaryAsNumber
      }
  }
   // Takes in a new employee object and adds a new table row to the
  // DOM that contains the new employee's info:
function addNewEmployeeTableRow(newEmployee) {
    let tbody = document.getElementById('employeesTableBody');
    
    // b. Add a new <tr> inside the <tbody>:
    tbody.innerHTML += `
      <tr>
        <td>${newEmployee.firstName}</td>
        <td>${newEmployee.lastName}</td>
        <td>${newEmployee.employeeId}</td>
        <td>${newEmployee.title}</td>
        <td>${convertNumberToUSD(newEmployee.annualSalary)}</td>
        <td>
          <button onClick="removeEmployee(event)">Delete</button>
        </td>
      </tr>
    `
  }
   // Sets the value of every input to an empty string:
function resetNewEmployeeForm() {
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('employeeIdInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';
  }
// Takes in the new employee's salary, updates the totalMonthlySalary global
  // variable, the updates the DOM to reflect the new value:
  function updateTotalMonthlySalary(newEmployeeSalary) {
    totalAnnualSalary += newEmployeeSalary;
  
    let totalMonthlySalary = totalAnnualSalary / 12;
  
    let totalMonthlySpan = document.getElementById('totalMonthlySalarySpan');
    totalMonthlySpan.textContent = convertNumberToUSD(totalMonthlySalary);
  
    if (totalMonthlySalary > 20000) {
        let leFoot = document.querySelector('footer');
        leFoot.classList.add('over-budget');
      }
    }