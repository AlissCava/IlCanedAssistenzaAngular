// script.js

// Al passaggio del mouse sulla card, aggiunge la classe is-flipped per far girare la card
document.querySelectorAll('.dog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.dog-card-inner').classList.add('is-flipped');
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.dog-card-inner').classList.remove('is-flipped');
    });
});
