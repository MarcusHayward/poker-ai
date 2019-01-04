class FakeDeck {
    constructor(cards) {
        this.cards = cards;
    }

    getNextCard() {
        return this.cards.pop()
    }
}