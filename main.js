const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 300,
});

// ScrollReveal().reveal(".explore__card", {
//   duration: 1000,
//   interval: 500,
// });

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 300,
});

// ScrollReveal().reveal(".offer__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//   loop: true,
// });

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    loop: true, // Loop the slides
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1 // Trigger the callback when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target); // Stop observing once the element is visible
      }
    });
  }, observerOptions);

  // Select all elements to observe
  const elementsToObserve = document.querySelectorAll(".fade-in");
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});