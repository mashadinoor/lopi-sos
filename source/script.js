console.log("Connect");
const navlink = document.getElementsByClassName("nav-link");
const offCanvas = document.getElementById("offcanvasNavbar");

for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function () {
    offCanvas.classList.add("hiding");
    offCanvas.classList.remove("show");
  });
}
