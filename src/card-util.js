const Card = require('./card')

function shortSuitToLong(shortSuit) {
    switch (shortSuit) {
        case 'h': return 'Hearts'
        case 'd': return 'Diamonds'
        case 's': return 'Spades'
        case 'c': return 'Clubs'
    }
}

function construct(...cards) {
    return cards.map((card) => {
        return new Card(card.slice(0, -1), shortSuitToLong(card.slice(-1)))
    })
}

module.exports = {
    construct: construct
}
