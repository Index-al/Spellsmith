module.exports = {
  // Format date
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // Remove / from card names before going to URL
  sanitizeCardName: function(cardName) {
    return cardName.replace(/\/\//g, '');
  }
};
