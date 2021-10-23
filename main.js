let hamburger = document.getElementById("hamburger");
let mobile_menu = document.querySelector(".mobile-links");

// Add click functionality to hamburger
hamburger.addEventListener("click", function () {
  mobile_menu.classList.add("active");
});

// select all li element in  the navbar
let lis = document.querySelectorAll(".li-link");
// looptthorough them to click on each link individually
lis.forEach((li) => {
  li.addEventListener("click", function () {
    //remove active class from menu
    mobile_menu.classList.remove("active");
  });
});
