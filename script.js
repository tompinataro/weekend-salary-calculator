  // Get the form data
  let firstName = document.querySelector('[data-testid="firstNameInput"]').value;
  let lastName = document.querySelector('[data-testid="lastNameInput"]').value;
  let id = document.querySelector('[data-testid="idInput"]').value;
  let title = document.querySelector('[data-testid="titleInput"]').value;
  let annualSalary = document.querySelector('[data-testid="annualSalaryInput"]').value;

  // Add the new employee to the table
  let table = document.querySelector('table');
  let newRow = table.insertRow(-1);
  let firstNameCell = newRow.insertCell(0);
  let lastNameCell = newRow.insertCell(1);
  let idCell = newRow.insertCell(2);
  let titleCell = newRow.insertCell(3);
  let annualSalaryCell = newRow.insertCell(4);

  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  idCell.innerHTML = id;
  titleCell.innerHTML = title;
  annualSalaryCell.innerHTML = annualSalary;

  function submitFields(event) {
  event.preventDefault();
  }
  
  // Calculate and display the total monthly cost
  function calculateTotalMonthlyCost(annualSalary) {
    return annualSalary / 12;
  const totalMonthlyCost = calculateTotalMonthlyCost(annualSalary);
  document.querySelector('footer p').innerHTML = `Total Monthly: $${totalMonthlyCost}`;


  // Apply the "over-budget" class if necessary
  if (totalMonthlyCost > 20000) {
    document.querySelector('footer').classList.add('over-budget');
  } else {
    document.querySelector('footer').classList.remove('over-budget');
  }
}


// ## Requirements: // * This application should have a form with five inputs that collect //a new employee's *first name, last name, ID number, job title, annual salary*.

// * When the "Submit" button is clicked:
//     * A new employee row should be added to the table.
//     * The footer's total monthly cost should be updated.
//     * The form inputs should be cleared out.

// * If the total monthly cost **exceeds $20,000**, apply an `over-budget` CSS class to the footer element.
//     * When applied, this CSS class should provide a clear visual indication that the monthly cost has been exceeded. (This could be as simple as turning the footer text red.)

// * Create a "Delete" button that removes an employee from the DOM.
//     * **For base mode**, the total monthly cost **does not** need to be updated when an employee is deleted.

// **FOR THE TESTS TO WORK**:
// * Your form's inputs must have these exact attributes:
//     * `data-testid="firstNameInput"`
//     * `data-testid="lastNameInput"`
//     * `data-testid="idInput"`
//     * `data-testid="titleInput"`
//     * `data-testid="annualSalaryInput"`
// * You must use a `<table>` element, where each employee is represented by a single `<tr>`.
// * The *total monthly* cost must be rendered somewhere inside the `<footer>` element.
// * The `over-budget` CSS class must be applied to the `<footer>` element when the total monthly salary exceeds $20,000.


