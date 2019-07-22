let casesActive = true;

let activeImg = document.querySelectorAll(".selected");

for (let i = 0; i < activeImg.length; i++) {
  activeImg[i].addEventListener("click", () => {
    if (casesActive) {
      activeImg[i].classList.toggle("active");
      casesActive = !casesActive;
      console.log(casesActive);
    }
  });
}
