// JavaScript Enhancements for Enchanted Locks Website

// Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselItems = Array.from(carouselTrack.children);
    const prevButton = document.querySelector(".carousel-button.left");
    const nextButton = document.querySelector(".carousel-button.right");
    const slideWidth = carouselItems[0].getBoundingClientRect().width;

    // Arrange slides in a row
    carouselItems.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });

    let currentIndex = 0;

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    };

    // Move to next slide
    nextButton.addEventListener("click", () => {
        if (currentIndex < carouselItems.length - 1) {
            const currentSlide = carouselItems[currentIndex];
            const nextSlide = carouselItems[currentIndex + 1];
            moveToSlide(carouselTrack, currentSlide, nextSlide);
            currentIndex++;
        }
    });

    // Move to previous slide
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            const currentSlide = carouselItems[currentIndex];
            const prevSlide = carouselItems[currentIndex - 1];
            moveToSlide(carouselTrack, currentSlide, prevSlide);
            currentIndex--;
        }
    });
});

// Responsive Navigation Toggle
const navToggle = () => {
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.classList.add("nav-toggle");
    document.querySelector("header").prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });
};

navToggle();

// Smooth Scrolling for Internal Links
const smoothScroll = () => {
    const links = document.querySelectorAll("nav a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};

smoothScroll();

// Dynamic Year in Footer
const updateFooterYear = () => {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Enchanted Locks | Nina Thompson`;
};

updateFooterYear();
