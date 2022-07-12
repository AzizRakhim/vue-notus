let elSections = document.querySelectorAll(".sections");
let elSectionBtns = document.querySelectorAll(".sectionBtn");

elSections[0].style.display = "block";
elSectionBtns[0].classList.add("nav-bar__btn--active");

elSectionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    elSectionBtns.forEach((item, i) => {
      item.classList.remove("nav-bar__btn--active");
      elSections[i].style.display = "none";
    })
    btn.classList.add("nav-bar__btn--active");
    elSections[index].style.display = "block";
  })
});

// Header menu

let elMenuBtn = document.querySelector("#menuBtn");
let elMenu = document.querySelector(".nav-bar__container");
let elCount = 0;

elMenuBtn.addEventListener("click", () => {
  if(elCount == 0){
    elMenu.style.display = "block";
    elCount++;
  } else {
    elMenu.style.display = "none";
    elCount--;
  }
  
})