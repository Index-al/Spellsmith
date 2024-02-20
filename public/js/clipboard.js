// This function should toggle the visibility of the clipboard contents
function toggleClipboard() {
    const clipboardBar = document.getElementById('clipboard-bar');
    const arrow = document.getElementById('clipboard-arrow');
    clipboardBar.classList.toggle('clipboard-expanded');

    // Toggle arrow direction
    if (clipboardBar.classList.contains('clipboard-expanded')) {
        arrow.textContent = '↓'; // Down arrow when expanded
    } else {
        arrow.textContent = '↑'; // Up arrow when collapsed
    }
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

function clearAllClipboard(event) {
    event.stopPropagation(); // Prevent the clipboard from toggling when the trash can is clicked
    localStorage.setItem('cardClipboard', JSON.stringify([])); // Clear the clipboard
    updateClipboardUI(); // Refresh the UI
}

function copyClipboardContent() {
    const clipboard = JSON.parse(localStorage.getItem('cardClipboard')) || [];
    const formattedText = clipboard.map(cardName => `1 ${cardName}`).join('\n');
    
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(formattedText).then(() => {
    console.log('Clipboard content copied!');
    }).catch(err => {
    console.error('Failed to copy: ', err);
    });
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
    const clearButton = document.getElementById('clear-clipboard');
    const copyButton = document.getElementById('copy-clipboard');
    if (clipboardBar) {
      clipboardBar.addEventListener('click', toggleClipboard);
    }
    updateClipboardUI();

    clearButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the clipboard from toggling
        localStorage.setItem('cardClipboard', JSON.stringify([]));
        updateClipboardUI();
      });

      copyButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the clipboard from toggling
        copyClipboardContent();
      });
  });