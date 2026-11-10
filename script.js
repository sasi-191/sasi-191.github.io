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

// fade in each section when it comes on the screen
const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.classList.add("reveal");
}

const watcher = new IntersectionObserver(function (entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  }
}, { threshold: 0.15 });

for (const section of sections) {
  watcher.observe(section);
}
