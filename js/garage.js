document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.garage__more');
    const testimonialsContent = document.querySelector('.garage__content');
    button.addEventListener('click', () => {
      testimonialsContent.classList.remove('hidden');
    });
});