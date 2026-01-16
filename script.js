function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close the menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu || !icon) return;

  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideIcon = icon.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideIcon) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
// Certificate preview modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

document.addEventListener("click", (e) => {
  const thumb = e.target.closest("[data-modal-img]");
  const close = e.target.closest("[data-close-modal]");

  if (thumb && modal && modalImg) {
    modalImg.src = thumb.getAttribute("data-modal-img");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  if (close && modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (modalImg) modalImg.src = "";
  }
});

// ESC to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (modalImg) modalImg.src = "";
  }
});
