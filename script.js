const birthDay = document.querySelector("#day");
const birthMonth = document.querySelector("#month");
const birthYear = document.querySelector("#year");
const inputs = document.querySelectorAll("input");

const submit = document.getElementById("submit");



function inputNumber(num) {
  var ASCIICode = num.which ? num.which : num.keyCode;
  if (ASCIICode > 31 && ASCIICode > 57) {
    alert("Enter numbers only");
  }
}

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  let valid = true;

  if (!typeof e === "number") {
    return;
  }
  return valid;
}
