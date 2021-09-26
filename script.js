let Name = document.querySelector(".name");
let about = document.querySelector(".about");
let navbar = document.querySelector(".navbar");
let track = document.querySelector(".car_track");
let car = document.querySelector(".car");
let left = document.querySelector(".button-left");
let right = document.querySelector(".button-right");
let slides = Array.from(track.children);
dot_array = document.querySelector(".car_nav");
let primary = document.querySelector(".primary");
let secondary = document.querySelector(".secondary");
let activeSlide = 0;
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
console.log(activeSlide);
let targetIndex;
// console.log(dot_array);
dots = Array.from(dot_array.children);
console.log(dots);
let slideSize = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = slideSize * index + "px";
});

let moveSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  currentSlide.classList.add("hide");
  targetSlide.classList.add("current-slide");
  targetSlide.classList.remove("hide");
  activeSlide = findSlideIndex(slides);
};
console.log(slides);
right.addEventListener("click", function (e) {
  let currentSlide = track.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  console.log(nextSlide);
  currentDot = dot_array.querySelector(".current-slide");
  nextDot = currentDot.nextElementSibling;
  if (activeSlide == slides.length - 1) {
    nextSlide = slides[0];
    nextDot = dots[0];
  }
  moveSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});
left.addEventListener("click", function (e) {
  let currentSlide = track.querySelector(".current-slide");
  let prevSlide = currentSlide.previousElementSibling;
  currentDot = dot_array.querySelector(".current-slide");
  prevDot = currentDot.previousElementSibling;
  if (activeSlide == 0) {
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  }
  moveSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});
updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
dot_array.addEventListener("click", function (e) {
  let targetDot = e.target.closest("button");
  console.log(targetDot);
  if (!targetDot) return;
  let currentSlide = track.querySelector(".current-slide");
  let currentDot = dot_array.querySelector(".current-slide");
  let targetIndex = dots.findIndex((dot) => dot === targetDot);
  let targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
findSlideIndex = (slides) => {
  let currentSlide = track.querySelector(".current-slide");
  a = slides.findIndex((dot) => dot === currentSlide);
  console.log(a);
  return a;
};
