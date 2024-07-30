let totalAnnualSalary = 0;

function handleSubmit(event) {
  event.preventDefault();

  let firstName = document.getElementById('firstNameInput').value;
  let lastName = document.getElementById('lastNameInput').value;
  let employeeId = document.getElementById('employeeIdInput').value;
  let title = document.getElementById('titleInput').value;
  let annualSalary = document.getElementById('annualSalary').value;

  annualSalary = Number(annualSalary);

  let tbody = document.getElementById('employeesTableBody');
  
  tbody.innerHTML += `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${employeeId}</td>
      <td>${title}</td>
      <td>${annualSalary}</td>
      <td>
        <button onClick="removeEmployee(event)">Delete</button>
      </td>
    </tr>
  `

  document.getElementById('firstNameInput').value = '';
  document.getElementById('lastNameInput').value = '';
  document.getElementById('employeeIdInput').value = '';
  document.getElementById('titleInput').value = '';
  document.getElementById('annualSalary').value = '';

  totalAnnualSalary += annualSalary;

  console.log("This is totalAnnualSalary:", totalAnnualSalary);

  let totalMonthlySalary = totalAnnualSalary / 12;

  let totalMonthlySalaryHtmlElement = document.getElementById('totalMonthlySalary');
  // console.log(totalMonthlySalaryHtmlElement);
  totalMonthlySalaryHtmlElement.innerHTML = totalMonthlySalary;

  if (totalMonthlySalary > 20000) {
    let leFoot = document.querySelector('footer');
    leFoot.classList.add('overBudget');
  }
}

function removeEmployee(event) {
  let clickedButton = event.target;
  let trToRemove = clickedButton.parentElement.parentElement;
  trToRemove.remove();
}


