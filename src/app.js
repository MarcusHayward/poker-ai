const Game = require('./game');
const Player = require('./player');

const players = [new Player('Andy'), new Player('Marcus')]

const game = new Game(players);

game.start();