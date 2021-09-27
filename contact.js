let form = document.querySelector("form");
let errorNote = document.querySelector(".error");

form.addEventListener("submit", Validate);

function Validate(e) {
  e.preventDefault();
  var inputs = [
    document.getElementById("email"),
    document.getElementById("message"),
  ];

  inputs.map((input) => {
    if (input.value == "") {
      e.preventDefault();
      errorNote.innerHTML = "Please complete all fields!";
      return false;
    }
  });

  window.location.href = `mailto:catherine.m.codes@gmail.com?from=${
    document.querySelector("#email").value
  }&subject=New Contact&body=${document.querySelector("#message").value}`;
}
