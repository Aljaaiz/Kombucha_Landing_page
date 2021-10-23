let hamburger = document.getElementById("hamburger");
let mobile_menu = document.querySelector(".mobile-links");

hamburger.addEventListener("click", function () {
  mobile_menu.classList.add("active");
});

let lis = document.querySelectorAll(".li-link");
lis.forEach((li) => {
  li.addEventListener("click", function () {
    mobile_menu.classList.remove("active");
  });
});
