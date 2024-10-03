const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const hiddenTexts = card.querySelectorAll('.hidden');
        hiddenTexts.forEach(text => {
            text.style.display = text.style.display === 'none' || !text.style.display ? 'block' : 'none';
        });
    });
});
