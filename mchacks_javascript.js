
/ADD ITEM
const firstNameInput = document.querySelector('.firstName'); //textbox to add first name
const lastNameInput = document.querySelector('.lastName');//textbox to add last name
const emailInput = document.querySelector('.emailInput');//textbox to add email

const errorMessage = document.querySelector('errorMessage.description');
//button to add item
const addPersonButton = document.querySelector('button.addPersonButton');//button to add item

//table for inserting the text
var table = document.getElementById("list_of_people");

addPersonButton.addEventListener('click', () => {

    //create new row 
    var row = table.insertRow(0);

    //insert new cells
    var firstNameCell = table.insertCell(0);
    var lastNameCell = table.insertCell(1);
    var emailCell = table.insertCell(2);
    var deleteButton = table.insertCell(3);
    
    if (firstNameInput == "" || lastNameInput == "" || emailInput == ""){
        //some random error message      
        p.innerHTML("Please fill in all fields before adding a new payee.");
    }

    else{
        //add text to the cells IF all text boxes are filled
        firstNameCell.innerHTML(firstNameInput.value);
        lastNameCell.innerHTML(lastNameInput.value);
        emailInput.innerHTML(emailInput.value);
    }

});

//used for deleting buttons
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("list_of_people").deleteRow(i);
}