document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const form = document.getElementById("betaForm");
  const message = document.getElementById("formMessage");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  form.addEventListener("submit", function(e){
    e.preventDefault();
    message.style.color="green";
    message.textContent="Successfully registered!";
    form.reset();
  });

});