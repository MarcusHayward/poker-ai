const HighCardRank = require('../../src/rank/high-card')
const CardUtil = require('../../src/card-util')

describe('HighCardRank', () => {
    it('finds the high card winner', () => {
        const player1Cards = CardUtil.construct('5h', '10d')
        const player2Cards =  CardUtil.construct('5d', '2h')
        const communityCards = CardUtil.construct('3s', '7s', '6s', '9s', 'Kc')

        const playerOneRank = new HighCardRank(player1Cards, communityCards)
        const playerTwoRank = new HighCardRank(player2Cards, communityCards)

        expect(playerOneRank.isBetterThan(playerTwoRank)).toBe(true)
    })
})