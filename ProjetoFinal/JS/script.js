let body = document.querySelector("body");
let themeBtn = document.getElementById("theme-toggle");
let moonIcon = document.getElementById("icon-moon");
let sunIcon = document.getElementById("icon-sun");
let themeIcon = document.getElementsByClassName("theme-icon");

themeBtn.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
});

/* ================= Criar as estrelas dinamicas ================= */
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
spawnStars(document.getElementById("stars-bg"), 200, 0.18);
// Cria: 200 estrelas -  18% douradas -  posições aleatórias

// ////////////////////////////

/* ---------------- Nav scroll links ---------------- */
document.querySelectorAll("[data-scroll]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  });
});
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("mousemove", (e) => {
    const r = a.getBoundingClientRect();
    a.style.setProperty("--x", e.clientX - r.left + "px");
    a.style.setProperty("--y", e.clientY - r.top + "px");
  });
});
["#cv-link", "#cv-link-2"].forEach((sel) => {
  const el = document.querySelector(sel);
  if (el)
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Substitui este link pelo teu ficheiro de CV.");
    });
});

(function () {
  // Spawn stars
  const container = document.getElementById("stars-bg");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(s);
  }

  // Trigger hand entrance after 2.4 s (adjust to match your loader timing)
  const stage = document.getElementById("handsContainer");
  setTimeout(() => stage.classList.add("in"), 2400);

  // Exit on scroll
  let exited = false;
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 120 && !exited) {
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
