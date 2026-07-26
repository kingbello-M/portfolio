const toggleButton = document.getElementById("darkmodebtn");
const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

function applyTheme(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    if (toggleButton) {
        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
        toggleButton.setAttribute("aria-pressed", String(isDarkMode));
    }
}

if (menu && navbar) {
    menu.addEventListener("click", () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", () => {
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme === "dark" || (!savedTheme && prefersDark));

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const isDarkMode = !document.body.classList.contains("dark-mode");
        applyTheme(isDarkMode);
    });
}
 