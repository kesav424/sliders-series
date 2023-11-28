let slide = document.querySelector(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let curosoul = document.querySelector(".curousel");
//()

let dirction;
next.addEventListener("click", () => {
  dirction = -1;
  slide.style.transform = "translateX(-20%)";
});

prev.addEventListener("click", () => {
  if (dirction == -1) {
    slide.appendChild(slide.firstElementChild);
  }
  dirction = 1;
  //   curosoul.style.justifyContent = "flex-end";
  slide.style.transform = "translateX(20%)";
});

slide.addEventListener("transitionend", () => {
  console.log(dirction);
  if (dirction == -1) {
    slide.appendChild(slide.firstElementChild);
  } else if (dirction == 1) {
    slide.prepend(slide.lastElementChild);
  }
  slide.style.transition = "none";
  slide.style.transform = "translateX(0)";
  setTimeout(() => {
    slide.style.transition = "all 0.5s ease";
  });
});
