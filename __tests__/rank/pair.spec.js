const Pair = require('../../src/rank/pair')
const CardUtil = require('../../src/card-util')
const HighCard = require('../../src/rank/high-card')

// describe('PairRank', () => {
//     it('matches pairs and the highest card wins', () => {
//         const player1Cards = CardUtil.construct('5h', '10d')
//         const player2Cards =  CardUtil.construct('5d', '2h')
//         const communityCards = CardUtil.construct('3s', '7s', '6s', '9s', '5c')

//         const playerOneRank = new PairRank(player1Cards, communityCards)
//         const playerTwoRank = new PairRank(player2Cards, communityCards)

//         expect(playerOneRank.isBetterThan(playerTwoRank)).toBe(true)
//     })

//     it('matches pairs and the highest cards are equal', () => {
//         const player1Cards = CardUtil.construct('5h', '2d')
//         const player2Cards = CardUtil.construct('5d', '3h')
//         const communityCards = CardUtil.construct('Ks', '7s', '6s', '9s', '5s')

//         const playerOneRank = new PairRank(player1Cards, communityCards)
//         const playerTwoRank = new PairRank(player2Cards, communityCards)

//         expect(playerOneRank.isBetterThan(playerTwoRank)).toBe(true)
//     })
// })

describe('Pair Hand', () => {
  it('matches pairs and the highest card wins', () => {
      const playerOneHighHand = new HighCard.Hand(CardUtil.construct('10d','9s','7s'))
      const playerOneHand = new Pair.Hand([5], playerOneHighHand)
      const playerTwoHighHand = new HighCard.Hand(CardUtil.construct('9s','7s','6s'))
      const playerTwoHand = new Pair.Hand([5], playerTwoHighHand)

      expect(playerOneHand.isBetterThan(playerTwoHand)).toBe(true)
  })

  it('matches pairs and the highest cards are equal', () => {
      const playerOneHighHand = new HighCard.Hand(CardUtil.construct('9s','7s','6s'))
      const playerOneHand = new Pair.Hand([5], playerOneHighHand)
      const playerTwoHighHand = new HighCard.Hand(CardUtil.construct('9s','7s','6s'))
      const playerTwoHand = new Pair.Hand([5], playerTwoHighHand)

      expect(playerOneHand.isBetterThan(playerTwoHand)).toBe(true)
  })
})