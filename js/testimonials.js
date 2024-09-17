document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.testimonials__more');
    const testimonialsContent = document.querySelector('.testimonials__content');
    button.addEventListener('click', () => {
      testimonialsContent.classList.remove('hidden');
    });
});