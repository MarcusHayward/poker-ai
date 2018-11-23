const Hand = require('./hand');
const CommunityCards = require('./community-cards');

class Dealer {
    constructor(deck, playerOne, playerTwo) {
        this.deck = deck;
        this.communityCards = new CommunityCards();
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    dealTo(player) {
        player.receiveCard(this.deck.getNextCard())
    }

    addFlop() {
        this.communityCards.addCard(this.deck.getNextCard())
        this.communityCards.addCard(this.deck.getNextCard())
        this.communityCards.addCard(this.deck.getNextCard())
    }

    addTurn(card) {
        this.communityCards.addCard(this.deck.getNextCard())
    }

    addRiver(card) {
        this.communityCards.addCard(this.deck.getNextCard())
    }
}

module.exports = Dealer