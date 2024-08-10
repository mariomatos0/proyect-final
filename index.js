document.addEventListener('DOMContentLoaded', function() {
  const prevSlideButton = document.querySelector('.prev-slide');
  const nextSlideButton = document.querySelector('.next-slide');
  const slides = document.querySelectorAll('.slides section');
  let currentSlideIndex = 0;

  slides[currentSlideIndex].classList.add('active');

  prevSlideButton.addEventListener('click', function() {
    if (currentSlideIndex > 0) {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex--;
      slides[currentSlideIndex].classList.add('active');
    }
  });

  nextSlideButton.addEventListener('click', function() {
    if (currentSlideIndex < slides.length - 1) {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex++;
      slides[currentSlideIndex].classList.add('active');
    }
  });
});