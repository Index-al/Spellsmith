// Sample deck data
const deckData = {
    deck: [
        { cardName: "Goblin Guide", quantity: 4 },
        { cardName: "Lightning Bolt", quantity: 4 },
        // Other cards in the deck...
    ]
};

// Compile Handlebars template
const source = document.getElementById("deck-builder-template").innerHTML;
const template = Handlebars.compile(source);

// Render template with deck data
const deckBuilderHtml = template(deckData);

// Display rendered HTML in the DOM
document.getElementById("deckBuilderContainer").innerHTML = deckBuilderHtml;

module.exports = router;