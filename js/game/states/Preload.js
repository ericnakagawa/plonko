Plonko.Preload = function() {
	this.ready = false;
};

Plonko.Preload.prototype = {
	preload: function() {
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadBar');
		this.preloaderBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloaderBar)

		// sprite sheets
		this.load.spritesheet('disk', 'assets/images/disks.png?' + this.game.rnd.integerInRange(0, 10000), 108, 108, 7);

		// sprite animations

		// loading game images
		this.load.image('background', 'assets/images/background.png');
		// this.load.image('border', 'assets/images/border.png');
		this.load.image('basket', 'assets/images/basket.png');
		this.load.image('player', 'assets/images/plonko.png?' + this.game.rnd.integerInRange(0, 10000));
		this.load.image('enemy', 'assets/images/enemy.png?' + this.game.rnd.integerInRange(0, 10000));
		this.load.image('ground', 'assets/images/ground.png?' + this.game.rnd.integerInRange(0, 10000));

		//audio -- needs mp3 and ogg
		this.load.audio('gameMusic', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
		this.load.audio('coin', 'assets/audio/coin.wav');

		this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

		this.load.onLoadComplete.add(this.onLoadComplete, this);
	},
	create: function() {
		this.preloaderBar.cropEnabled = false;
	},
	update: function() {
		if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
			this.state.start('MainMenu');
		}
	},
	onLoadComplete: function() {
		this.ready = true;
	}
};