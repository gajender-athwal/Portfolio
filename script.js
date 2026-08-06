/*=========================================
        PORTFOLIO WEBSITE
        Developer : Gajendar Singh Athwal
=========================================*/

// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (menu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// =========================
// Sticky Navbar
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (header) {

        header.classList.toggle("sticky", window.scrollY > 70);

    }

});


// =========================
// Active Menu
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Typed JS
// =========================

if (typeof Typed !== "undefined") {

    new Typed(".typing", {

        strings: [

            "Frontend Developer",

            "React Developer",

            "Next.js Developer",

            "JavaScript Developer",

            "UI Designer"

        ],

        typeSpeed: 90,

        backSpeed: 60,

        backDelay: 1500,

        loop: true

    });

}


// =========================
// AOS
// =========================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        offset: 80

    });

}


// =========================
// Circular Skills
// =========================

const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    const progress = circle.querySelector(".progress");

    if (!progress) return;

    const percent = parseInt(circle.dataset.percent);

    const radius = 60;

    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    progress.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {

        progress.style.strokeDashoffset = offset;

    }, 500);

});


// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const speed = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + speed);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    };

    update();

});


// =========================
// Contact Form
// =========================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You! Your message has been sent successfully.");

        this.reset();

    });

}


// =========================
// Back To Top
// =========================

const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.opacity = "1";

        topBtn.style.visibility = "visible";

    } else {

        topBtn.style.opacity = "0";

        topBtn.style.visibility = "hidden";

    }

});


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// =========================
// Mouse Glow Effect
// =========================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle, rgba(34,197,94,.18), transparent 70%)";
glow.style.filter = "blur(30px)";
glow.style.zIndex = "0";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX - 125 + "px";
    glow.style.top = e.clientY - 125 + "px";

});


// =========================
// Loader Hide
// =========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = ".5s";

    }

});


// =========================
// Console Message
// =========================

console.log("%cPortfolio Loaded Successfully 🚀", "color:#22c55e;font-size:18px;font-weight:bold;");