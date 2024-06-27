  // Navbar

  const navBar = document.querySelector(".nav");

  window.addEventListener("scroll", () => 
    navBar.classList.toggle("sticky", window.scrollY > 0)
);

// Swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  lazy: true,
  centeredSlides: true,
  loop: true,
  keyboard:{
    enabled: true,
  },
  autoplay:{
    delay: 3000,
  },
  
  pagination:{
    el: ".swiper-pagination",
  },
// Navigation Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
console.log("Swiper initialized");

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  console.log("Swiper next button clicked");
  swiper.slideNext();
});