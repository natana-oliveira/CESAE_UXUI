let body = document.querySelector("body");
// let themeBtn = document.getElementById("theme-toggle");
let moonIcon = document.getElementById("icon-moon");
let sunIcon = document.getElementById("icon-sun");
let themeIcon = document.getElementsByClassName("theme-icon");

// themeBtn.addEventListener("click", function () {
//   if (body.classList.contains("lightMode")) {
//     body.classList.remove("lightMode");
//     // themeIcon.innerHTML = sunIcon;
//   } else {
//     body.classList.add("lightMode");
//     // themeIcon.innerHTML = moonIcon;
//   }
// });

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
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
