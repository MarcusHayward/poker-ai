const Dealer = require('./dealer');
const Deck = require('./deck');
const Rank = require('./rank');

class Game {
  constructor(players) {
    this.deck = new Deck();
    this.players = players;
    this.dealer = new Dealer(this.deck, this.players[0], this.players[1]);
  }

  start() {
    this.dealer.dealTo(this.players[0]);
    this.dealer.dealTo(this.players[1]);
    this.dealer.dealTo(this.players[0]);
    this.dealer.dealTo(this.players[1]);

    //console.log(this.players[0].name);
    //console.log(this.players[0].hand);
    //console.log(this.players[1].name);
    //console.log(this.players[1].hand);

    this.dealer.addFlop();
    //console.log(this.dealer.communityCards.cards);
    //console.log();

    this.dealer.addTurn();
    //console.log(this.dealer.communityCards.cards);
    //console.log();

    this.dealer.addRiver();
    //console.log(this.dealer.communityCards.cards);
    //console.log();
    let playerOneRank = new Rank(
      this.players[0].hand,
      this.dealer.communityCards.cards
    );
    let playerTwoRank = new Rank(
      this.players[1].hand,
      this.dealer.communityCards.cards
    );
  }
}

module.exports = Game;
