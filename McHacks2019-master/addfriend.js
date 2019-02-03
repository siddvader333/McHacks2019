const firstNameInput = document.querySelector('.firstName'); //textbox to add first name
const lastNameInput = document.querySelector('.lastName');//textbox to add last name
const emailInput = document.querySelector('.emailInput');//textbox to add email

const errorMessage = document.querySelector('errorMessage.description');
//button to add item
const addPersonButton = document.querySelector('button.addPersonButton');//button to add item


function addRow(){

    //table for inserting the text
    var table = document.getElementById(".list_of_people");

    //create new row 
    var row = table.insertRow(0);

    //insert new cells
    var firstNameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var emailCell = row.insertCell(2);
    var deleteButton = row.insertCell(3);
    

        //add text to the cells IF all text boxes are filled
        firstNameCell.innerHTML = "New Name";
        lastNameCell.innerHTML = lastNameInput.value;
        emailCell.innerHTML = emailInput.value;
    

};

//used for deleting buttons
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("list_of_people").deleteRow(i);
}