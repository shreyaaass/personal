let Name = document.querySelector(".name");
let about = document.querySelector(".about");
let navbar = document.querySelector(".navbar");
console.log(Name);
window.addEventListener("scroll", function () {
  offset = window.scrollY;
  console.log((offset / visualViewport.height) * 100);
  Name.style.top = 50 - (offset / visualViewport.height) * 300 + "%";
  // Name.style.left = 40 - (offset / visualViewport.height) * 100 + "%";
  Name.style.tranform = `translateY(${
    (offset / visualViewport.height) * 100 + "%"
  })`;
  console.log(Name.style.top);
  if ((offset / visualViewport.height) * 100 > -30) {
    about.classList.remove("hidden");
    about.classList.add("show");
  }
  if ((offset / visualViewport.height) * 100 < 20) {
    about.classList.add("hidden");
    about.classList.remove("show");
  }
});
window.onscroll = function () {
  myFunction();
};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
