
function Walkway(game, cat) {
	"use strict";

	this.create = function() {
		this.sprite = game.add.sprite(1695, 485);

		game.physics.p2.enable(this.sprite);

		this.sprite.body.setRectangle(1195, 5)
		this.sprite.body.static = true;
		this.sprite.body.immovable = true;
	}

	this.update = function() {
	}

	this.render = function() {
		game.debug.body(this.sprite)
	}

	this.preload = function(){

	}
}
