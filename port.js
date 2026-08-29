const toggleButton = document.getElementById("darkmodebtn");
const langToggle = document.getElementById("lang-toggle");
const menu = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contactForm");
const backToTop = document.getElementById("backToTop");
const toast = document.getElementById("toast");
const header = document.querySelector(".header");
const methodButtons = document.querySelectorAll(".method-btn");

const WHATSAPP_NUMBER = "237650240983";
const EMAIL_ADDRESS = "belloboris83@gmail.com";

const translations = {
    en: {
        navHome: "Home", navAbout: "About", navServices: "Services", navStack: "Stack",
        navProjects: "Projects", navContact: "Contact", hireMe: "Hire me",
        greeting: "Hello, I'm", roleLead: "I'm a",
        homeDesc: "I craft practical software solutions, build modern web experiences and turn ideas into products that solve real-world problems — powered by clean code and thoughtful design.",
        letsWork: "Let's work together", chatWhatsApp: "Chat on WhatsApp",
        statLanguages: "Languages Mastered", statProjects: "Projects Built", statCommitment: "Commitment",
        chipFS: "Full Stack Developer", chipAI: "AI Engineer", chipPS: "Problem Solver",
        aboutLabel: "Get to know me", aboutWord: "About", aboutMeWord: "me",
        aboutTagline1: "A passionate", aboutTagline2: "FULL STACK DEVELOPER", aboutTagline3: "& AI Engineer",
        aboutText: "My main aim is to provide solutions to software related problems. I build automated systems that help companies solve bigger tasks quickly and efficiently — and I use AI prompting to make development faster, smarter and more accurate.",
        detailName: "Name:", detailEmail: "Email:", detailLocation: "Location:",
        detailStatus: "Status:", detailExperience: "Experience:", countryName: "Cameroon",
        statusValue: "Available for freelance & full-time", expValue: "2+ years of building",
        getInTouch: "Get in touch", requestCV: "Request CV via WhatsApp",
        expYears: "Years of", expBuilding: "Building",
        stripExperience: "Years Experience", stripLanguages: "Languages Mastered", stripProjects: "Projects Built",
        servicesLabel: "What I do", my: "My", servicesWord: "Services",
        servicesIntro: "I create polished digital experiences that are practical, modern and built around real user needs.",
        serviceWeb: "Web Development",
        serviceWebText: "I build responsive websites and web apps that feel smooth, professional and easy to use on every device.",
        serviceUIDesign: "UI/UX Design",
        serviceUIDesignText: "I design interfaces that are visually appealing, intuitive and focused on creating a strong user experience.",
        serviceApp: "App Development",
        serviceAppText: "I develop functional applications — from productivity tools to creative products that businesses rely on.",
        techStackLabel: "Tech Stack",
        languagesHeading1: "Languages I've", languagesHeading2: "Mastered",
        languagesIntro: "The tools and languages I use every day to ship clean, reliable and scalable software.",
        levelAdvanced: "Advanced", levelExpert: "Expert",
        projectsLabel: "Selected work", projectsHeading1: "Featured", projectsHeading2: "Projects",
        projectsIntro: "A collection of practical products and digital experiences designed to solve real problems with clean, modern interfaces.",
        visitLive: "Visit live project",
        project1Type: "EdTech · Exam Platform",
        project1Text: "An exam platform that lets teachers set online exams in minutes. Students register, take the exam and submit — then the built-in AI assistant auto-corrects the multiple-choice questions and helps distribute all results at once.",
        project1Tag1: "Online Exams", project1Tag2: "AI Grading", project1Tag3: "Result Distribution",
        project2Type: "AI · Marketing Tool",
        project2Text: "Upload a single product photo and instantly get a professional flyer plus a complete product website — ready to publish and share, no design skills needed.",
        project2Tag1: "AI Generator", project2Tag2: "Flyer Maker", project2Tag3: "Product Website",
        project3Type: "Multimedia · Portfolio", project3Title: "Video Editor Portfolio",
        project3Text: "A sleek portfolio showcasing my video editing work — a collection of clips, edits and visual stories crafted for brands and content creators.",
        project3Tag1: "Video Editing", project3Tag2: "Showcase", project3Tag3: "Creative",
        contactLabel: "Contact", contactHeading1: "Let's build something", contactHeading2: "great together",
        contactIntro: "Have a project in mind or just want to say hi? Drop a message — I usually reply within 24 hours.",
        emailMe: "Email Me", whatsappMe: "WhatsApp Me", basedIn: "Based in",
        basedInValue: "Cameroon · Working worldwide", waCta: "Chat with me directly on WhatsApp",
        methodWhatsapp: "WhatsApp", methodEmail: "Email",
        labelName: "Full name", labelEmail: "Email address", labelPhone: "Phone (optional)", labelMessage: "Your message",
        placeholderName: "Jane Doe", placeholderEmail: "you@example.com", placeholderPhone: "+237 ...",
        placeholderMessage: "Tell me about your project or idea...",
        sendMessage: "Send Message",
        formHint: "Your message opens directly in your WhatsApp app or email client.",
        toastFill: "Please fill in all required fields.",
        toastWhatsapp: "Opening WhatsApp to send your message...",
        toastEmail: "Opening your email app...",
        footerText: "Built with passion. All rights reserved.",
        metaTitle: "Bello Mohamed | Software Engineer & Full Stack Developer",
        metaDescription: "Bello Mohamed — Software Engineer, Full Stack Developer and AI Engineer building modern web experiences that solve real-world problems.",
        roles: ["Software Engineer", "Full Stack Developer", "AI Engineer", "Problem Solver"]
    },
    fr: {
        navHome: "Accueil", navAbout: "À propos", navServices: "Services", navStack: "Stack",
        navProjects: "Projets", navContact: "Contact", hireMe: "Engagez-moi",
        greeting: "Bonjour, je suis", roleLead: "Je suis",
        homeDesc: "Je crée des solutions logicielles pratiques, conçois des expériences web modernes et transforme des idées en produits qui résolvent des problèmes réels — grâce à un code propre et un design réfléchi.",
        letsWork: "Travaillons ensemble", chatWhatsApp: "Discuter sur WhatsApp",
        statLanguages: "Langages maîtrisés", statProjects: "Projets réalisés", statCommitment: "Engagement",
        chipFS: "Développeur Full Stack", chipAI: "Ingénieur IA", chipPS: "Résolveur de problèmes",
        aboutLabel: "Apprenez à me connaître", aboutWord: "À propos", aboutMeWord: "de moi",
        aboutTagline1: "Un", aboutTagline2: "DÉVELOPPEUR FULL STACK", aboutTagline3: "passionné & Ingénieur IA",
        aboutText: "Mon objectif est d'apporter des solutions aux problèmes liés aux logiciels. Je crée des systèmes automatisés qui aident les entreprises à accomplir de grandes tâches rapidement et efficacement — et j'utilise l'IA pour rendre le développement plus rapide, plus intelligent et plus précis.",
        detailName: "Nom :", detailEmail: "Email :", detailLocation: "Localisation :",
        detailStatus: "Statut :", detailExperience: "Expérience :", countryName: "Cameroun",
        statusValue: "Disponible pour freelance & temps plein", expValue: "2+ ans de création",
        getInTouch: "Contactez-moi", requestCV: "Demander le CV via WhatsApp",
        expYears: "Années de", expBuilding: "Création",
        stripExperience: "Années d'expérience", stripLanguages: "Langages maîtrisés", stripProjects: "Projets réalisés",
        servicesLabel: "Ce que je fais", my: "Mes", servicesWord: "Services",
        servicesIntro: "Je crée des expériences digitales raffinées, pratiques, modernes et conçues autour des besoins réels des utilisateurs.",
        serviceWeb: "Développement Web",
        serviceWebText: "Je construis des sites web et applications responsives, fluides, professionnels et faciles à utiliser sur tous les appareils.",
        serviceUIDesign: "Design UI/UX",
        serviceUIDesignText: "Je conçois des interfaces attrayantes, intuitives et centrées sur une expérience utilisateur forte.",
        serviceApp: "Développement d'Apps",
        serviceAppText: "Je développe des applications fonctionnelles — des outils de productivité aux produits créatifs dont les entreprises dépendent.",
        techStackLabel: "Stack technique",
        languagesHeading1: "Langages que j'ai", languagesHeading2: "Maîtrisés",
        languagesIntro: "Les outils et langages que j'utilise chaque jour pour livrer des logiciels propres, fiables et évolutifs.",
        levelAdvanced: "Avancé", levelExpert: "Expert",
        projectsLabel: "Travaux sélectionnés", projectsHeading1: "Projets", projectsHeading2: "Phare",
        projectsIntro: "Une collection de produits pratiques et d'expériences digitales conçus pour résoudre de vrais problèmes avec des interfaces propres et modernes.",
        visitLive: "Voir le projet",
        project1Type: "EdTech · Plateforme d'examen",
        project1Text: "Une plateforme d'examen qui permet aux enseignants de créer des examens en ligne en quelques minutes. Les étudiants s'inscrivent, passent l'examen et soumettent — puis l'assistant IA intégré corrige automatiquement les questions à choix multiples et aide à distribuer tous les résultats en une fois.",
        project1Tag1: "Examens en ligne", project1Tag2: "Correction IA", project1Tag3: "Distribution des résultats",
        project2Type: "IA · Outil marketing",
        project2Text: "Téléchargez une seule photo de produit et obtenez instantanément un flyer professionnel plus un site web complet — prêt à publier et à partager, sans compétences en design.",
        project2Tag1: "Générateur IA", project2Tag2: "Créateur de flyers", project2Tag3: "Site produit",
        project3Type: "Multimédia · Portfolio",
        project3Title: "Portfolio de montage vidéo",
        project3Text: "Un portfolio élégant présentant mon travail de montage vidéo — une collection de clips, montages et histoires visuelles conçus pour les marques et les créateurs de contenu.",
        project3Tag1: "Montage vidéo", project3Tag2: "Vitrine", project3Tag3: "Créatif",
        contactLabel: "Contact", contactHeading1: "Construisons quelque chose de", contactHeading2: "grand ensemble",
        contactIntro: "Un projet en tête ou juste envie de dire bonjour ? Laissez un message — je réponds généralement sous 24 heures.",
        emailMe: "Envoyez-moi un email", whatsappMe: "WhatsApp moi", basedIn: "Basé à",
        basedInValue: "Cameroun · Disponible dans le monde", waCta: "Discutez avec moi directement sur WhatsApp",
        methodWhatsapp: "WhatsApp", methodEmail: "Email",
        labelName: "Nom complet", labelEmail: "Adresse email", labelPhone: "Téléphone (optionnel)", labelMessage: "Votre message",
        placeholderName: "Jean Dupont", placeholderEmail: "vous@exemple.com", placeholderPhone: "+237 ...",
        placeholderMessage: "Parlez-moi de votre projet ou de votre idée...",
        sendMessage: "Envoyer le message",
        formHint: "Votre message s'ouvre directement dans votre application WhatsApp ou votre client email.",
        toastFill: "Veuillez remplir tous les champs obligatoires.",
        toastWhatsapp: "Ouverture de WhatsApp pour envoyer votre message...",
        toastEmail: "Ouverture de votre application email...",
        footerText: "Réalisé avec passion. Tous droits réservés.",
        metaTitle: "Bello Mohamed | Ingénieur Logiciel & Développeur Full Stack",
        metaDescription: "Bello Mohamed — Ingénieur Logiciel, Développeur Full Stack et Ingénieur IA créant des expériences web modernes qui résolvent de vrais problèmes.",
        roles: ["Ingénieur Logiciel", "Développeur Full Stack", "Ingénieur IA", "Résolveur de problèmes"]
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key];
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = dict[el.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = dict[el.dataset.i18nPlaceholder];
    });

    if (langToggle) {
        langToggle.textContent = lang === "en" ? "FR" : "EN";
        langToggle.setAttribute("aria-label", lang === "en" ? "Switch language to French" : "Switch language to English");
    }
    document.title = dict.metaTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", dict.metaDescription);

    restartTyping();
}

if (langToggle) {
    langToggle.addEventListener("click", () => updateLanguage(currentLang === "en" ? "fr" : "en"));
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);

function applyTheme(isDark) {
    document.body.classList.toggle("light-mode", !isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (toggleButton) {
        toggleButton.textContent = isDark ? "☾" : "☀";
        toggleButton.setAttribute("aria-pressed", String(!isDark));
    }
}

if (toggleButton) {
    toggleButton.addEventListener("click", () => applyTheme(document.body.classList.contains("light-mode")));
}

applyTheme(isDarkMode);

if (menu && navbar) {
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navbar.classList.toggle("active");
        menu.classList.toggle("active", isOpen);
        menu.setAttribute("aria-expanded", String(isOpen));
        menu.textContent = isOpen ? "✕" : "☰";
    });

    navbar.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navbar.classList.remove("active");
            menu.classList.remove("active");
            menu.setAttribute("aria-expanded", "false");
            menu.textContent = "☰";
        }
    });

    document.addEventListener("click", (e) => {
        if (navbar.classList.contains("active") && !navbar.contains(e.target) && !menu.contains(e.target)) {
            navbar.classList.remove("active");
            menu.classList.remove("active");
            menu.setAttribute("aria-expanded", "false");
            menu.textContent = "☰";
        }
    });
}

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 40;
    header && header.classList.toggle("scrolled", scrolled);
    backToTop && backToTop.classList.toggle("show", window.scrollY > 600);
    updateActiveLink();
}, { passive: true });

function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    let currentId = "home";
    sections.forEach((section) => {
        const top = window.scrollY + 120;
        if (top >= section.offsetTop) currentId = section.id;
    });
    navbar && navbar.querySelectorAll("a").forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isActive);
        link.setAttribute("aria-current", isActive ? "true" : "false");
    });
}

const typingEl = document.querySelector(".multiple-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

if (typingEl) {
    function type() {
        const roles = t("roles");
        if (roleIndex >= roles.length) roleIndex = 0;
        const current = roles[roleIndex];
        typingEl.textContent = current.slice(0, charIndex);
        let delay = deleting ? 45 : 85;

        if (!deleting && charIndex === current.length) {
            delay = 1800;
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 350;
        }

        charIndex += deleting ? -1 : 1;
        setTimeout(type, delay);
    }

    type();
}

function restartTyping() {
    if (!typingEl) return;
    roleIndex = 0;
    charIndex = 0;
    deleting = false;
    typingEl.textContent = "";
}

const reveals = document.querySelectorAll(".reveal");

if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("visible"));
} else {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute("data-delay") || 0;
                entry.target.style.transitionDelay = `${delay}ms`;
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach((el) => revealObserver.observe(el));
}

const inViewFallback = setTimeout(() => {
    reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh && rect.bottom > 0) el.classList.add("visible");
    });
}, 1200);

const counters = document.querySelectorAll(".stat-number");

if (!("IntersectionObserver" in window)) {
    counters.forEach((el) => (el.textContent = el.dataset.count));
} else {
    const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
        }

        counterObserver.unobserve(el);
        requestAnimationFrame(tick);
    });
}, { threshold: 0.4 });

    counters.forEach((el) => counterObserver.observe(el));
}

let selectedMethod = "whatsapp";

methodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        methodButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        selectedMethod = btn.dataset.method;
    });
});

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function validateField(input) {
    const ok = input.checkValidity() && input.value.trim() !== "";
    if (input.required) input.classList.toggle("invalid", !ok);
    return ok;
}

if (contactForm) {
    contactForm.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("input", () => input.classList.remove("invalid"));
        input.addEventListener("blur", () => input.required && validateField(input));
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputs = contactForm.querySelectorAll("input[required], textarea[required]");
        let valid = true;
        inputs.forEach((input) => {
            if (!validateField(input)) valid = false;
        });
        if (!valid) {
            showToast(t("toastFill"));
            return;
        }

        const name = contactForm.querySelector("[name='name']").value.trim();
        const email = contactForm.querySelector("[name='email']").value.trim();
        const phone = contactForm.querySelector("[name='phone']").value.trim();
        const message = contactForm.querySelector("[name='message']").value.trim();

        const emailLine = email ? `Email: ${email}\n` : "";
        const phoneLine = phone ? `Phone: ${phone}\n` : "";

        if (selectedMethod === "whatsapp") {
            const text = `Hello Bello! I'm ${name}.\n${emailLine}${phoneLine}\n\n${message}`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
            showToast(t("toastWhatsapp"));
        } else {
            const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
            window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
            showToast(t("toastEmail"));
        }

        contactForm.reset();
    });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
});

setTimeout(updateActiveLink, 100);

updateLanguage(currentLang);