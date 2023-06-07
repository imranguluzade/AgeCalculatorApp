const birthDay = document.querySelector(".day");
const birthMonth = document.querySelector(".month");
const birthYear = document.querySelector(".year");
const inputs = document.querySelectorAll("input");
const dError = document.querySelector("#dayError");
const mError = document.querySelector("#monthError");
const yError = document.querySelector("#yearError");
const calcDays = document.querySelector(".c-days");
const calcMonth = document.querySelector(".c-months");
const calcYear = document.querySelector(".c-years");
const today = new Date();
console.log(today);
let age;
let month;
let day;

const submit = document.getElementById("submit");

// Validations
birthDay.addEventListener("input", function (e) {
  if (e.target.value <= 0 || e.target.value > 31) {
    dError.style.display = "block";
  } else {
    dError.style.display = "none";
  }
  day = today.getDay() - e.target.value;
  calcDays.innerHTML = day;
});

birthMonth.addEventListener("input", function (e) {
  if (e.target.value < 1 || e.target.value > 12) {
    mError.style.display = "block";
  } else {
    mError.style.display = "none";
  }
  month = today.getMonth() - e.target.value;
  calcMonth.innerHTML = month;
});

birthYear.addEventListener("input", function (e) {
  if (e.target.value < 1900 || e.target.value > 2024) {
    yError.style.display = "block";
  } else {
    yError.style.display = "none";
  }
  age = today.getFullYear() - e.target.value;
  calcYear.innerHTML = age;
});
