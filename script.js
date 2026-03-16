function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Certificate modal
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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    if (modalImg) modalImg.src = "";
  }
});

// Smooth scroll active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#6366f1";
    }
  });
});
