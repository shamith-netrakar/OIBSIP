/*==================================================
                SELECT ELEMENTS
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector(".header");

/*==================================================
                MOBILE MENU
==================================================*/

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

/*==================================================
            CLOSE MENU AFTER CLICK
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*==================================================
                STICKY HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});
/*==================================================
                TYPED.JS ANIMATION
==================================================*/

const typed = new Typed(".typing-text", {

    strings: [

        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Blockchain Developer",
        "Java Developer",
        "React Developer"

    ],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    startDelay: 500,

    loop: true,

    showCursor: true,

    cursorChar: "|",

    smartBackspace: true

});
/*==================================================
        ACTIVE NAVIGATION ON SCROLL
==================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

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

/*==================================================
            SMOOTH SCROLL OFFSET
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            const headerHeight = header.offsetHeight;

            const targetPosition =
                target.offsetTop - headerHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});
/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(

    ".home-content, \
     .home-img, \
     .about-content, \
     .about-img, \
     .skill-card, \
     .project-card, \
     .education-item, \
     .contact form"

);

/*==================================================
            INITIALIZE REVEAL CLASS
==================================================*/

revealElements.forEach(element => {

    element.classList.add("reveal");

});

/*==================================================
            REVEAL ON SCROLL
==================================================*/

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

/*==================================================
            INITIAL REVEAL
==================================================*/

revealOnScroll();

/*==================================================
            REVEAL WHILE SCROLLING
==================================================*/

window.addEventListener(

    "scroll",

    revealOnScroll

);
/*==================================================
            BACK TO TOP BUTTON
==================================================*/

const backToTop = document.querySelector(".back-to-top");

/*==================================================
            SHOW / HIDE BUTTON
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.classList.add("active");

    }

    else{

        backToTop.classList.remove("active");

    }

});

/*==================================================
            SCROLL TO TOP
==================================================*/

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==================================================
            CURRENT YEAR
==================================================*/

const yearElement = document.querySelector("#year");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

/*==================================================
            PRELOADER (OPTIONAL)
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==================================================
            DISABLE RIGHT CLICK (OPTIONAL)
==================================================*/

// Uncomment if needed

/*
document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});
*/

/*==================================================
            DISABLE IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log(

`%cWelcome to Shamith Netrakar's Portfolio`,
"color:#00A2FF;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Shamith Netrakar",
"color:#ffffff;font-size:14px;"

);

/*==================================================
            END OF SCRIPT.JS
==================================================*/