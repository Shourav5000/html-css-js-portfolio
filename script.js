function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Optional: Close the menu when clicking outside
document.addEventListener("click", function(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideIcon = icon.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideIcon) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
