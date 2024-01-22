const toggleBtn = document.querySelector(".toggle");
const toggleLabel = document.querySelector(".toggle-label");
const handle = document.querySelector(".handle");
const docElement = document.documentElement;

// Get user preferred (default) theme
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)");

// A boolean variable to use as a status
// to enable back and forth theme switching
let toggleStatus;
// Set default position of "handle" also change toggleStatus
// depending on default theme
if (prefersDarkMode.matches) {
  toggleBtn.style.cssText = `justify-content: flex-end`;
  toggleStatus = false;
} else {
  toggleBtn.style.cssText = `justify-content: start`;
  toggleStatus = true;
}

toggleLabel.addEventListener("click", switchTheme);
toggleBtn.addEventListener("click", switchTheme);

function switchTheme() {
  if (!toggleStatus) {
    handle.classList.remove("move-right");
    toggleBtn.style.cssText = `justify-content: start`;
    docElement.style.setProperty("--bg-color", "#fff");
    docElement.style.setProperty("--text-color", "#222222");
    docElement.style.setProperty("--border-color", "#d4d4d4");
    toggleStatus = true;
  } else {
    handle.classList.add("move-right");
    docElement.style.setProperty("--bg-color", "#222222");
    docElement.style.setProperty("--text-color", "#fff");
    docElement.style.setProperty("--border-color", "#555");
    toggleStatus = false;
  }
}
