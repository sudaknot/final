const menuIcon = document.querySelector(".hamburger");

const navbarList = document.getElementById("navbarlist");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbarList.classList.toggle("active");
});


