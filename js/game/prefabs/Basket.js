var Basket = function(game, x, y, frame) {
	key = 'basket';
	Phaser.Sprite.call(this, game, x, y, key, frame);

	this.scale.setTo(0.25);
	this.anchor.setTo(0.5);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;

	this.events.onRevived.add(this.onRevived, this);
}

Basket.prototype = Object.create(Phaser.Sprite.prototype);
Basket.prototype.constructor = Basket;

Basket.prototype.onRevived = function() {
};