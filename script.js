const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

function validate(email, num) {
  const input = document.getElementById(`email-${num}`);
  const pop = document.querySelector(`.pop-up-${num}`);
  if (validateEmail(email)) {
    pop.classList.remove("display");
    input.classList.remove("error-border");
    alert("email " + email + " is valid");
    return true;
  } else {
    pop.classList.add("display");
    input.classList.add("error-border");
  }

  // Add Error Message to check if email is valid
}

// To Check the validiy of the email Address
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
btn1.addEventListener("click", function () {
  const email = document.getElementById("email-1").value;
  validate(email, 1);
});
btn2.addEventListener("click", function () {
  const email = document.getElementById("email-2").value;
  validate(email, 2);
});
