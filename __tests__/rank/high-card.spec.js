const HighCard = require('../../src/rank/high-card')
const CardUtil = require('../../src/card-util')

describe('HighCardRank', () => {
    it('returns a high card hand', () => {
        const player1Cards = CardUtil.construct('5h', '10d')
        const communityCards = CardUtil.construct('3s', '7s', '6s', '9s', 'Kc')

        const playerOneRank = new HighCard.Rank(player1Cards, communityCards)

        const expectedHand = new HighCard.Hand(CardUtil.construct('Kc', '10d', '9s', '7s', '6s'));

        expect(playerOneRank.getHand()).toEqual(expectedHand)
    })
})

describe('HighCardHand', () => {
    it('finds the high card winner', () => {
        const player1Cards = CardUtil.construct('Kc', '10d', '9s', '7s', '6s')
        const player2Cards =  CardUtil.construct('Kc', '9s', '7s', '6s', '5d')

        const playerOneHand = new HighCard.Hand(player1Cards)
        const playerTwoHand = new HighCard.Hand(player2Cards)

        expect(playerOneHand.isBetterThan(playerTwoHand)).toBe(true)
    })
})