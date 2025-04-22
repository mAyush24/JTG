const video = document.getElementById('featureVideo');
const playIcon = document.getElementById('playIcon');

function togglePlay() {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hidden');
    } else {
        video.pause();
        playIcon.classList.remove('hidden');
    }
}

// Optional: hide icon when video ends
video.addEventListener('ended', () => {
    playIcon.classList.remove('hidden');
});


const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active-dot', i === index);
    });
    current = index;
}

// Auto-slide
setInterval(() => {
    let next = (current + 1) % slides.length;
    showSlide(next);
}, 5000);

// Dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple HTML validation is already handled by `required` & `type="email"`

    modal.style.display = "flex";
    form.reset();
});

function closeModal() {
    modal.style.display = "none";
}

// Close modal if user clicks outside modal-content
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
}