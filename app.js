const Dealer = require('./dealer');
const Deck = require('./deck');
const Player = require('./player');

let deck = new Deck();
var marcus = new Player('Marcus');
var andy = new Player('Andy');
let dealer = new Dealer(deck, marcus, andy);
dealer.deal();

console.log(marcus.name);
console.log(marcus.hand);
console.log(andy.name);
console.log(andy.hand);