const Dealer = require('./dealer');
const Deck = require('./deck');

const PairRank = require('./rank/pair');
const HighCardRank = require('./rank/high-card');

class Game {
  constructor(players, deck) {
    this.deck = deck
    this.players = players;
    this.dealer = new Dealer(this.deck, this.players[0], this.players[1]);
  }

  start() {
    this.dealer.dealTo(this.players[0]);
    this.dealer.dealTo(this.players[1]);
    this.dealer.dealTo(this.players[0]);
    this.dealer.dealTo(this.players[1]);

    console.log(this.players[0].name);
    console.log(this.players[0].hand);
    console.log('')
    console.log(this.players[1].name);
    console.log(this.players[1].hand);
    console.log('')

    this.dealer.addFlop();

    this.dealer.addTurn();

    this.dealer.addRiver();

    let playerOneRank = new PairRank(
      this.players[0].hand,
      this.dealer.communityCards.cards
    );
    let playerTwoRank = new PairRank(
      this.players[1].hand,
      this.dealer.communityCards.cards
    );

    console.log('')

    if (playerOneRank.isBetterThan(playerTwoRank)) {
      console.log(this.players[0].name + " wins")
    } else {
      console.log(this.players[1].name + " wins")
    }

  }
}

module.exports = Game;
