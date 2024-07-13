



function submitFields(event){
 //   document.querySelector('#Warning').innerHTML =` `
    event.preventDefault(); 
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value
    let id = document.querySelector('#id').value
    let title = document.querySelector('#title').value
    let annualSalary = document.querySelector('#annualsalary').value

    console.log(firstName,lastName,id,title,annualSalary)
    let newtablerow = document.querySelector('#table')
      newtablerow.innerHTML += `
      <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td>${annualSalary}</td>
      <td><button onClick="removeItem(event)">❌</button>
      </td> 
      </tr>
      `
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


