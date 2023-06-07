const birthDay = document.querySelector(".day");
const birthMonth = document.querySelector(".month");
const birthYear = document.querySelector(".year");
const inputs = document.querySelectorAll("input");
const dError = document.querySelector("#dayError");

const submit = document.getElementById("submit");

birthDay.addEventListener("input", function (e) {

    console.log(e.target.value);
});
