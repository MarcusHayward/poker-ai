const FlushRank = require('../../src/rank/flush')
const CardUtil = require('../../src/card-util')

describe('FlushRank', () => {
    it('player 1 wins with a flush', () => {
        const player1Cards = CardUtil.construct('Kh', '4h')
        const player2Cards =  CardUtil.construct('5d', '2h')
        const communityCards = CardUtil.construct('6h', '9h', '10h', '9c', '2c')

        const playerOneRank = new FlushRank(player1Cards, communityCards)
        const playerTwoRank = new FlushRank(player2Cards, communityCards)

        expect(playerOneRank.isBetterThan(playerTwoRank)).toBe(true)
    })

    it('both have flush and player 1 has high card', () => {
        const player1Cards = CardUtil.construct('Kh', '4h')
        const player2Cards =  CardUtil.construct('5h', '2h')
        const communityCards = CardUtil.construct('6h', '9h', '10h', '9c', '2c')

        const playerOneRank = new FlushRank(player1Cards, communityCards)
        const playerTwoRank = new FlushRank(player2Cards, communityCards)

        expect(playerOneRank.isBetterThan(playerTwoRank)).toBe(true)
    })
})