const Card = require('../src/card')

function shortSuitToLong(shortSuit) {
    switch (shortSuit) {
        case 'h': return 'Heart'
        case 'd': return 'Diamond'
        case 's': return 'Spade'
        case 'c': return 'Club'
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
