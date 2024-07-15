  function onReady() {
    console.log("JavaScript is working!");
    onReady
  }
  function testfunction (event){
  console.log ("hello")
  }

  function testFunctionCAP(event){
  console.log("HELLO", event)
  }
  testfunction ()
  testFunctionCAP (5)
  onReady ()

// Why is the following attempt at using a function not working??
 //function show(){
 //console.log("firstName","lastName","id","title","annualSalary")
// }
   // Get the form data
  // * Your form's inputs must have these exact attributes:
  // (IN HTML ONLY!!!)  * `data-testid="firstNameInput"`
 
  function submitFields(addTableRow){

  document.querySelector('#Warning').innerHTML =` `;
  addTableRow.preventDefault();

  // below I am using the affirmation app as a comparison for syntax
  let firstName = document.querySelector('#firstName').value;
  let lastName = document.querySelector('#lastName').value;
  let idNumber = document.querySelector('#idNumber').value;
  let title = document.querySelector('#title').value;
  let annualSalary = document.querySelector('#annualSalary').value;
  
  console.log(firstName,lastName,idNumber,title,annualSalary)

  let newtablerow = document.querySelector('#table')
//
  newtablerow.innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button onClick="removeItem(event)">❌</button>
    </td> 
    </tr>
    `
    } 
  
  // Calculate and display the total monthly cost
  //function calculateTotalMonthlyCost(annualSalary) {
   // return annualSalary / 12;
 
//  let totalMonthlyCost = calculateTotalMonthlyCost(annualSalary);
//  document.querySelector('footer p').innerHTML =`Total Monthly: $${totalMonthlyCost}`;

// // Select all rows in the table
// let rows = document.querySelectorAll('#table tr');

// // Initialize total to 0
// let totalAnnualSalary = 0;

// Iterate through each row
// for (let i = 0; i < rows.length; i++) {
//     // Get the annual salary from the last cell of the row
//     let annualSalary = parseFloat(rows[i].lastChild.innerText);

//     // Add the annual salary to the total
//     totalAnnualSalary += annualSalary;
// }

//function calculateTotalMonthlyCost(totalAnnualSalary) {
//  return totalAnnualSalary / 12;

// Place the total monthly cost in the footer
//document.querySelector('footer p').innerHTML = "Total Monthly Cost";

  // Apply the "over-budget" class if necessary
//if (totalMonthlyCost > 20000) {
 // document.querySelector('footer').classList.add('over-budget');
 // document.querySelector('footer p').style.color = 'red';
//} else {
//  document.querySelector('footer').classList.remove('over-budget');
//}



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

// * You must use a `<table>` element, where each employee is represented by a single `<tr>`.
// * The *total monthly* cost must be rendered somewhere inside the `<footer>` element.
// * The `over-budget` CSS class must be applied to the `<footer>` element when the total monthly salary exceeds $20,000.




//Leftovers
  // Add the new employee from form in new row in the table:

// let table = document.querySelector('table');
// let newRow = table.insertRow(-1);
// let firstNameCell = newRow.insertCell(0);
//  let lastNameCell = newRow.insertCell(1);
//  let idCell = newRow.insertCell(2);
//  let titleCell = newRow.insertCell(3);
//  let annualSalaryCell = newRow.insertCell(4);

//  firstNameCell.innerHTML = firstName;
//  lastNameCell.innerHTML = lastName;
//  idCell.innerHTML = id;
//  titleCell.innerHTML = title;
//  annualSalaryCell.innerHTML = annualSalary;