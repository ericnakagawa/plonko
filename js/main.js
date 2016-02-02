// var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

var game = new Phaser.Game(640, 1136, Phaser.AUTO, 'game');

game.state.add('Boot', Plonko.Boot);
game.state.add('Preloader', Plonko.Preload)
game.state.add('MainMenu', Plonko.MainMenu)
game.state.add('Game', Plonko.Game)

game.state.start('Boot');
