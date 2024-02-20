document.getElementById('expand-clipboard').addEventListener('click', function() {
    const clipboardContent = document.querySelector('.card-clipboard-content');
    clipboardContent.classList.toggle('is-hidden');
  });

  document.querySelectorAll('.add-to-clipboard').forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent any parent handlers from being executed
      const cardName = this.dataset.cardName;
      const cardImage = this.dataset.cardImage;
      const clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
      clipboard.push({ name: cardName, imageUrl: cardImage });
      localStorage.setItem('cardClipboard', JSON.stringify(clipboard));
      // Update the display function here as well
    });
  });
  
  // Function to display cards in the clipboard
  function displayClipboard() {
    const clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    const container = document.querySelector('.card-clipboard-content');
    container.innerHTML = ''; // Clear current contents
    clipboard.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.innerHTML = `
        <img src="${card.imageUrl}" alt="${card.name}" />
        <button class="delete-from-clipboard" data-card-name="${card.name}">X</button>
      `;
      container.appendChild(cardElement);
    });
  }
  
// Call displayClipboard on page load to show stored cards
document.addEventListener('DOMContentLoaded', displayClipboard);

document.addEventListener('click', function(event) {
if (event.target.classList.contains('delete-from-clipboard')) {
    const cardName = event.target.dataset.cardName;
    let clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    clipboard = clipboard.filter(card => card.name !== cardName);
    localStorage.setItem('cardClipboard', JSON.stringify(clipboard));
    displayClipboard(); // Refresh the clipboard display
}
});
