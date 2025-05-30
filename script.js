document.querySelectorAll('.card-image').forEach(el => {
const imageUrl = el.getAttribute('data-image');
el.style.backgroundImage = `url(${imageUrl})`;
});