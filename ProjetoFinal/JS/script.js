let body = document.querySelector("body");
let themeBtn = document.getElementById("theme-toggle");

/* ---------- Modo Noturno ---------- */
const LIGHT_MODE_IMAGES = {
  "frameCesaeBlack.svg": "frameCesaeLight.svg",
  "coordinateBlack.png": "coordinateLight.png",
  "starsBlack.png": "starsLight.png",
  "disco.png": "discoLight.png",
  "gallery.png": "galleryLight.png",
  "complexJupiterBG.png": "complexJupiterBGLight.png",
  "arrowDoodleBlack.png": "arrowDoodleLight.png",
  "spark.png": "sparkLight.png",
  "starBlack.png": "starLight.png",
  "rocket.png": "rocketLight.png",
  "earth.png": "earthLight.png",
};
const DARK_MODE_IMAGES = Object.fromEntries(
  Object.entries(LIGHT_MODE_IMAGES).map(([dark, light]) => [light, dark]),
);

function swapThemeImages(isLight) {
  const map = isLight ? LIGHT_MODE_IMAGES : DARK_MODE_IMAGES;
  document.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    const filename = src && src.split("/").pop();
    if (filename && map[filename]) {
      img.setAttribute("src", src.replace(filename, map[filename]));
    }
  });
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  swapThemeImages(document.body.classList.contains("light"));
});

swapThemeImages(document.body.classList.contains("light"));

/* ---------- Menu mobile (hamburger) ---------- */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("navLinks");

function closeMobileMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  if (isOpen && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

/* ---------- Brilho do hover a seguir o cursor ---------- */
navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mousemove", (e) => {
    const r = a.getBoundingClientRect();
    a.style.setProperty("--x", e.clientX - r.left + "px");
    a.style.setProperty("--y", e.clientY - r.top + "px");
  });
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

/*  ---------- Entrance sequence ---------- */
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("navbar").classList.add("in");
    document.querySelector(".hero-content").classList.add("in");
    document.querySelector(".scroll-hint").classList.add("in");
  }, 200);
});
