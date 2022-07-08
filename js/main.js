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
})