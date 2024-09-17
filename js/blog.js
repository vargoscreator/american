document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.blog__more');
    const testimonialsContent = document.querySelector('.blog__content');
    button.addEventListener('click', () => {
      testimonialsContent.classList.remove('hidden');
    });
});