const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.toggle('active', index === currentIndex);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Initialize the first image as active
updateCarousel();

