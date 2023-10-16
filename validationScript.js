// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value
// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern

// Valid input: display confirmation and submit the form

// Invalid input: display error message
document.getElementById('myForm').addEventListener('submit' , e => {
  let inputValue = document.getElementById('inputField').value;
  let inputRegex = /^[a-zA-Z0-9]*$/;
  if (!inputRegex.test(inputValue) || inputValue == "") {
    alert("Invalid Entry")
    e.preventDefault();
  }
  else {
    alert("Thank you for your submission")
  }
});