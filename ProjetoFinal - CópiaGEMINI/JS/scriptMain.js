/* Secção Main: painéis interativos (Figma: Homepage > Desktop Clicked)
   - Black Hole Message (clicar no buraco negro)
   - CV Message (clicar no envelope)
   - Contact Menu (clicar no megafone)
   A porta e o envelope continuam a abrir/fechar apenas com CSS (:hover),
   isso não muda aqui — este ficheiro só trata dos 3 painéis acima. */

const OPEN_CLASS = "is-open";

/* Todos os painéis que participam na regra "só um aberto de cada vez". */
function getTogglePanels() {
  return [
    document.getElementById("blackHole"),
    document.getElementById("envelope"),
    document.getElementById("contact"),
  ].filter(Boolean);
}

/* Fecha todos os painéis, exceto (opcionalmente) um. */
function closeAllPanels(except) {
  getTogglePanels().forEach((panel) => {
    if (panel !== except) panel.classList.remove(OPEN_CLASS);
  });
}

/* Alterna um painel, fechando sempre os restantes primeiro. */
function togglePanel(panel) {
  if (!panel) return;
  const willOpen = !panel.classList.contains(OPEN_CLASS);
  closeAllPanels(panel);
  panel.classList.toggle(OPEN_CLASS, willOpen);
}

function toggleBlackHoleMessage() {
  togglePanel(document.getElementById("blackHole"));
}

function toggleCVMessage() {
  togglePanel(document.getElementById("envelope"));
}

function openContactMenu() {
  const contact = document.getElementById("contact");
  closeAllPanels(contact);
  contact.classList.add(OPEN_CLASS);
}

function closeContactMenu() {
  document.getElementById("contact").classList.remove(OPEN_CLASS);
}

function toggleContactMenu() {
  const contact = document.getElementById("contact");
  if (contact.classList.contains(OPEN_CLASS)) {
    closeContactMenu();
  } else {
    openContactMenu();
  }
}

/* Fecha o painel aberto ao clicar fora dele. */
document.addEventListener("click", (event) => {
  const openPanel = getTogglePanels().find((panel) =>
    panel.classList.contains(OPEN_CLASS),
  );
  if (openPanel && !openPanel.contains(event.target)) {
    openPanel.classList.remove(OPEN_CLASS);
  }
});
