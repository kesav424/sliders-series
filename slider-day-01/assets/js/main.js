let slider = document.querySelector(".slider");

let arrowLeft = document.querySelector(".arrow-left");
let arrowright = document.querySelector(".arrow-right");

let pagination = document.querySelectorAll(".pagination");

let tabIndex = 0;

function setSlide() {
  slider.style.transform = `translateX(` + tabIndex * -25 + `%)`;

  pagination.forEach((bullet) => bullet.classList.remove("selected"));
  pagination[tabIndex].classList.add("selected");

  if (tabIndex == 3) {
    arrowLeft.style.opacity = "0.3";
  } else {
    arrowLeft.style.opacity = "1";
  }
  if (tabIndex == 0) {
    arrowright.style.opacity = "0.3";
  } else {
    arrowright.style.opacity = "1";
  }
}
setSlide();
arrowLeft.addEventListener("click", () => {
  tabIndex = tabIndex < 3 ? tabIndex + 1 : tabIndex;
  setSlide();
});

arrowright.addEventListener("click", () => {
  tabIndex = tabIndex > 0 ? tabIndex - 1 : tabIndex;
  setSlide();
});

pagination.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabIndex = index;
    setSlide();
  });
});
