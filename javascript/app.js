const back_btn = document.querySelector(".back_btn");
const nav = document.querySelector(".nav_");
const menu = document.querySelector(".menu");

if (back_btn) {
  back_btn.onclick = () => {
    back_btn.classList.toggle("active");
      nav.classList.toggle("active");

  };
}

if (menu) {
  menu.onclick = () => {
    back_btn.classList.toggle("active");
      nav.classList.toggle("active");
  };
}