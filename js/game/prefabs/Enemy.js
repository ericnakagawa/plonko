var Enemy = function(game, x, y, frame) {
	key = 'enemy';
	Phaser.Sprite.call(this, game, x, y, key, frame);

	this.scale.setTo(1);
	this.anchor.setTo(0.5);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;

	this.checkWorldBounds = true;
	this.onOutbOfBoundsKill = true;

	this.events.onRevived.add(this.onRevived, this);
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.onRevived = function() {
	// this.game.add.tween(this).to({x: this.x - 16, y: this.y - 16}, 500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true)
	// this.body.velocity.x = 0;
}