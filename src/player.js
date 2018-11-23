class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card);
    }
}

module.exports = Player