const Deck = require('./deck');
const Game = require('./game');
const Player = require('./player');

const players = [new Player('Andy'), new Player('Marcus')]

const deck = new Deck();
const game = new Game(players, deck);

game.start();