// open and close the menu on phones
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// close the menu after a link is clicked
const links = navLinks.querySelectorAll("a");
for (const link of links) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

// the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
