class Hand {
    constructor(firstCard, secondCard) {
        this.cards = [firstCard, secondCard]
    }

    addCard(card) {
        this.cards.push(card)
    }
}

module.exports = Hand