function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;

  const isOpen = menu.classList.contains("open");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  let bd = document.getElementById("nav-backdrop");
  if (!bd) {
    bd = document.createElement("div");
    bd.id = "nav-backdrop";
    bd.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:999;display:none;";
    bd.addEventListener("click", toggleMenu);
    document.body.appendChild(bd);
  }
  bd.style.display = isOpen ? "none" : "block";
}

// Certificate modal
document.addEventListener("click", (e) => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (!modal || !modalImg) return;

  const thumb = e.target.closest("[data-modal-img]");
  const close = e.target.closest("[data-close-modal]");

  if (thumb) {
    modalImg.src = thumb.getAttribute("data-modal-img");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  if (close) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
  }
});

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("imgModal");
  if (e.key === "Escape" && modal && modal.classList.contains("open")) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.getElementById("modalImg").src = "";
  }
});

// Active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach((l) => {
    l.style.color = l.getAttribute("href") === `#${current}` ? "#6366f1" : "";
  });
});
