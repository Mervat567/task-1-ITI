document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('birthday-image').style.display = 'none';
        document.getElementById('birthday-form').style.display = 'block';
    }, 5000);
});

function submitMessage() {
    window.location.href = '#thankyou';
}


let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});
