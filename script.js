// Typing Effect Simulation
const words = ["Software Engineer.", "Backend Developer.", "Java Enthusiast."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 60);
    };
    loopDeleting();
}

// Trigger typing sequence on load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.typing-text').innerHTML = "";
    typingEffect();
});

// Dynamic Active Navbar Link & Progress Bar Trigger
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });

    // Special execution when entering the skills viewport
    const skillsSection = document.getElementById("skills");
    const skillsTop = skillsSection.offsetTop;
    if (pageYOffset >= skillsTop - window.innerHeight + 200) {
        skillsSection.classList.add("active");
    }
});

// Minimalist mobile menu toggle execution interface 
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    // Toggle navigation UI context dynamically if layout requires drawer styling
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.backgroundColor = "#0f172a";
        navLinks.style.padding = "2rem";
    }
});

// Interactive intercept confirmation for simulation of the Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out, Naveed! This interactive layout submission has been successfully tracked inside the local framework handler simulation.");
    this.reset();
});