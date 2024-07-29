script.js

let totalAnnualSalary = 0;

function handleSubmit(event) {
  event.preventDefault();

  let firstName = document.getElementById('firstNameInput').value;
  let lastName = document.getElementById('lastNameInput').value;
  let employeeId = document.getElementById('employeeIdInput').value;
  let title = document.getElementById('titleInput').value;
  let annualSalary = document.getElementById('annualSalaryInput').value;
  annualSalaryAsNumber = Number(annualSalary);

  
  let tbody = document.getElementById('employeesTableBody');
  
  tbody.innerHTML += `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${employeeId}</td>
      <td>${title}</td>
      <td>${convertNumberToUSD(annualSalaryAsNumber)}</td>
      <td>
        <button onClick="removeEmployee(event)">Delete</button>
      </td>
    </tr>
  `

  document.getElementById('firstNameInput').value = '';
  document.getElementById('lastNameInput').value = '';
  document.getElementById('employeeIdInput').value = '';
  document.getElementById('titleInput').value = '';
  document.getElementById('annualSalaryInput').value = '';

  totalAnnualSalary += annualSalaryAsNumber;

  let totalMonthlySalary = totalAnnualSalary / 12;

  let totalMonthlySpan = document.getElementById('totalMonthlySalarySpan');
  totalMonthlySpan.textContent = convertNumberToUSD(totalMonthlySalary);

  if (totalMonthlySalary > 20000) {
    let leFoot = document.querySelector('footer');
    leFoot.classList.add('over-budget');
  }
}

// 6. When a Delete button is clicked, the <tr> it is inside of
//    should be removed from the DOM:
function removeEmployee(event) {
  let clickedButton = event.target;
  let trToRemove = clickedButton.parentElement.parentElement;
  trToRemove.remove();
  // Or, if you want to just chain all the methods:
  // event.target.parentElement.parentElement.remove();
}

// Given a number like: 50222.2222, this function will return
// a string representation as USD currency: '$50,222.22':
  // https://codedamn.com/news/javascript/format-number-as-currency
function convertNumberToUSD(number) {
  let formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  let numberAsUSD = formatter.format(number);
  return numberAsUSD;
}