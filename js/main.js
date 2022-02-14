// hamburger menu
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
})

// active button in faqs work
const faqsWork = document.querySelector(".workActive");
const faqsWorkD = document.querySelector(".faqs__description")

faqsWork.addEventListener("click", function() {
  faqsWork.classList.toggle("workActive--opened");
  faqsWorkD.classList.toggle("faqs__description--opened");
})

// active button in faqs safe
const faqsSafe = document.querySelector(".safeActive");
const faqsSAfed = document.querySelector(".faqs__description")

faqsSafe.addEventListener("click", function() {
  faqsSafe.classList.toggle("safeActive--opened");
  faqsSAfed.classList.toggle("faqs__description--opened");
})