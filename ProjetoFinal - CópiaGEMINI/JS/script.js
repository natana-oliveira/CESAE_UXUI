let body = document.querySelector("body");
let themeBtn = document.getElementById("theme-toggle");

/* ---------- Modo Noturno ---------- */
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

/* ---------- Menu mobile (hamburger) ---------- */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("navLinks");

function closeMobileMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

/* ---------- Criar as estrelas dinamicas ---------- */
function spawnStars(container, count, goldRatio) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "star" + (Math.random() < goldRatio ? " gold" : "");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

spawnStars(document.getElementById("stars-bg"), 400, 0.2); // Cria: 400 estrelas -  20% douradas -  posições aleatórias

(function () {
  // Entrada da mão após 2s
  const stage = document.getElementById("handsContainer");
  setTimeout(() => stage.classList.add("in"), 2000);

  // Exit on scroll
  let exited = false;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 100 && !exited) {
        stage.classList.add("exit");
        exited = true;
      } else if (window.scrollY <= 120 && exited) {
        stage.classList.remove("exit");
        exited = false;
      }
    },
    { passive: true },
  );
})();

/* ================= Entrance sequence ================= */
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("navbar").classList.add("in");
    document.querySelector(".hero-content").classList.add("in");
    document.querySelector(".scroll-hint").classList.add("in");
  }, 200);
});
