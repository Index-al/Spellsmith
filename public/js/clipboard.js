// This function should toggle the visibility of the clipboard contents
function toggleClipboard() {
    console.log("Hitting toggleClipboard()!");
    const clipboardBar = document.getElementById('clipboard-bar');
    const clipboardContent = document.querySelector('.clipboard-content');
    clipboardBar.classList.toggle('clipboard-expanded');
    clipboardContent.classList.toggle('is-hidden');
  }
  
  
// Function to add a card to the clipboard
function addToClipboard(cardName) {
    let clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    if (!clipboard.includes(cardName)) {
    clipboard.push(cardName);
    localStorage.setItem('cardClipboard', JSON.stringify(clipboard));
    updateClipboardUI();
    }
}

// Function to update the clipboard UI with stored items
function updateClipboardUI() {
    const clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    const container = document.querySelector('.clipboard-content');
    container.innerHTML = ''; // Clear current content
    clipboard.forEach(cardName => {
    const element = document.createElement('div');
    element.textContent = cardName;

    // Remove card from clipboard button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button action
        event.stopPropagation(); // Stop event bubbling
        const cardName = this.parentElement.dataset.cardName;
        removeFromClipboard(cardName);
    });
    element.appendChild(removeButton);
    element.classList.add('clipboard-item');
    element.dataset.cardName = cardName;
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent default button action
        event.stopPropagation(); // Stop event bubbling
        const cardName = this.dataset.cardName;
        removeFromClipboard(cardName);
    });

    container.appendChild(element);
    });
}

// Function to remove a card from the clipboard
function removeFromClipboard(cardName) {
    let clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    clipboard = clipboard.filter(name => name !== cardName);
    localStorage.setItem('cardClipboard', JSON.stringify(clipboard));
    updateClipboardUI();
}

// Attach event listeners to add-to-clipboard buttons
document.querySelectorAll('.add-to-clipboard').forEach(button => {
    button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button action
    event.stopPropagation(); // Stop event bubbling
    const cardName = this.dataset.cardName;
    addToClipboard(cardName);
    });
});

// Initial call to display cards in the clipboard on page load
document.addEventListener('DOMContentLoaded', function() {
    const clipboardBar = document.getElementById('clipboard-bar');
    if (clipboardBar) {
      clipboardBar.addEventListener('click', toggleClipboard);
    }
  });