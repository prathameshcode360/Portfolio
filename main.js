// =========================================
// Mobile Navigation Menu
// =========================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================================
// Close Mobile Menu After Clicking a Link
// =========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================================
// Hero Button
// =========================================

const heroButton = document.querySelector(".hero-btn");

heroButton.addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

// =========================================
// Typing Effect
// =========================================

const typingElement = document.getElementById("typing");

const roles = ["Web Developer", "App Developer", "AI Engineer"];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;

      if (roleIndex === roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

// =========================================
// Service Buttons
// =========================================

const serviceButtons = document.querySelectorAll(".service-card button");

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thank you! We will contact you soon.");
  });
});

// =========================================
// Contact Form
// =========================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Your message has been sent successfully!");

  contactForm.reset();
});
