const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")
const secondButton = document.querySelector(".second");
const one = document.querySelector(".one");
nextButton.addEventListener("click", () => {
    secondButton.style.display = "block";
    one.style.display = "none";
})
prevButton.addEventListener("click", () => {
    secondButton.style.display = "none";
    one.style.display = "block";
})