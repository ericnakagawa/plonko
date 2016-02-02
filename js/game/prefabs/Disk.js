var Disk = function(game, x, y, frame) {
	key = 'disk';
	Phaser.Sprite.call(this, game, x, y, key, frame);

	this.animations.add('shing');

	this.scale.setTo(0.5);
	this.anchor.setTo(0.5);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	// this.body.bounce.set(0.9, this.game.rnd.integerInRange(25, 60) / 100);
	this.body.bounce.set(0.8, 0.8);
	this.body.allowRotation = true;
	this.body.angularRotation = 30;
	this.body.angularVelocity = 30;
	this.body.friction.setTo(20);

	this.body.collideWorldBounds = true;

	this.checkWorldBounds = true;
	this.onOutbOfBoundsKill = true;

	this.events.onKilled.add(this.onKilled, this);
	this.events.onRevived.add(this.onRevived, this);
}

Disk.prototype = Object.create(Phaser.Sprite.prototype);
Disk.prototype.constructor = Disk;

Disk.prototype.onRevived = function() {
	// this.body.velocity.x = this.game.rnd.integerInRange(-2, 2);
	this.animations.play('shing', 8, true);
	// this.body.bounce.set(this.game.rnd.integerInRange(25, 500) / 100);
}

Disk.prototype.onKilled = function() {
	this.animations.frame = 0;
}