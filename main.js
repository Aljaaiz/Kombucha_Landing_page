let hamburger = document.getElementById("hamburger");
let mobile_menu = document.querySelector(".mobile-links");

hamburger.addEventListener("click", function () {
  mobile_menu.classList.toggle("active");
});
