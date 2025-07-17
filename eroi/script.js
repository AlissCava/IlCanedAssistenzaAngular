// script.js

// Al click del mouse sulla card, aggiunge la classe is-flipped per far girare la card
document.querySelectorAll('.dog-card').forEach(card => {
    card.addEventListener('click', () => {
      const inner = card.querySelector('.dog-card-inner');
      inner.classList.toggle('flipped');
    });
  });
