const toggleButton = document.getElementById("darkmodebtn");
const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const contactForm = document.getElementById("contactForm");

function applyTheme(isDarkMode) {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    if (toggleButton) {
        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
        toggleButton.setAttribute("aria-pressed", String(isDarkMode));
        menu.classList.toggle("show");
    }
}

if (menu && navbar) {
    menu.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");
        menu.classList.toggle("active", isOpen);
        menu.setAttribute("aria-expanded", String(isOpen));
        menu.textContent = isOpen ? "✕" : "☰";
    });

    window.addEventListener("scroll", () => {
        navbar.classList.remove("active");
        menu.classList.remove("active");
        menu.setAttribute("aria-expanded", "false");
        menu.textContent = "☰";
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name")?.toString().trim() || "Client";
        const email = formData.get("email")?.toString().trim() || "";
        const phone = formData.get("phone")?.toString().trim() || "";
        const message = formData.get("message")?.toString().trim() || "";

        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);

        window.location.href = `mailto:mohamedbello223@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
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
 