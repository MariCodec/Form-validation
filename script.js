// моя форма
const myForm = document.forms.myForm;

// перша форма для імя
const firstName = myForm.Fname;

//друге поле
const lastName = myForm.lname;
//емейл
const email = myForm.email;
// password
const password = myForm.password;

// чекбокс
const checkbox = myForm.checkbox;
//
//кнопка
const submit = myForm.submit;
const errormassege = document.querySelector(".form-group");

//
const error = document.querySelectorAll(".error");
const correctIcon = document.querySelectorAll(".correctIcon");
const incorrectIcon = document.querySelectorAll(".incorrectIcon");

//
submit.disabled = true;
//
let correctText = function (name, elem) {
  let regex = /^[A-Za-z]{2,20}$/;

  if (regex.test(name)) {
    correctIcon[elem].style.display = "block";
    incorrectIcon[elem].style.display = "none";
    error[elem].style.display = "none";
    return true;
  } else {
    incorrectIcon[elem].style.display = "block";
    correctIcon[elem].style.display = "none";
    error[elem].style.display = "block";
    return false;
  }
};

let correctmail = function (name) {
  let pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (pattern.test(name)) {
    correctIcon[2].style.display = "block";
    incorrectIcon[2].style.display = "none";
    error[2].style.display = "none";
    return true;
  } else {
    incorrectIcon[2].style.display = "block";
    error[2].style.display = "block";
    correctIcon[2].style.display = "none";
    return false;
  }
};

function correctpassword(name, elem) {
  let reg = /^\w{8,15}$/;
  if (reg.test(name)) {
    correctIcon[3].style.display = "block";
    incorrectIcon[3].style.display = "none";
    error[3].style.display = "none";
    return true;
  } else {
    incorrectIcon[3].style.display = "block";
    correctIcon[3].style.display = "none";
    error[3].style.display = "block";
    return false;
  }
}
password.addEventListener("input", () => {
  correctpassword(password.value);

  validation();
});
firstName.addEventListener("input", () => {
  correctText(firstName.value, 0);

  validation();
});
lastName.addEventListener("input", () => {
  correctText(lastName.value, 1);
  validation();
});
email.addEventListener("input", () => {
  correctmail(email.value);
  validation();
});
checkbox.addEventListener("input", () => {
  correctCheckbox();
  validation();
});
function correctCheckbox() {
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function validation() {
  if (
    correctText(lastName.value, 1) &&
    correctText(firstName.value, 0) &&
    correctmail(email.value) &&
    correctCheckbox() &&
    correctpassword(password.value)
  ) {
    submit.disabled = false;
  }
}

//
const start = document.querySelector(".start");
const formGreate = document.querySelector(".formGreate");

function outputMyform(event) {
  event.preventDefault();
  validation();
  formGreate.style.display = "block";
  let userDate = {
    name: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  console.log(userDate);
}

myForm.addEventListener("submit", outputMyform);
start.addEventListener("click", () => {
  formGreate.style.display = "none";
  //
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  correctText(firstName.value, 0);
  correctText(lastName.value, 1);
  correctmail(email.value);
  correctpassword(password.value);
  checkbox.checked = false;
});
