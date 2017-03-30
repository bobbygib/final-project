
function Floor(game, cat) {
	"use strict";

	this.create = function() {
		this.sprite = game.add.sprite(0, 750);

		game.physics.p2.enable(this.sprite);

		this.sprite.body.setRectangle(11000, 100)
		this.sprite.body.static = true;
		this.sprite.body.immovable = true;
	}

	this.update = function() {
	}

	this.render = function() {
		//game.debug.body(this.sprite)
	}

	this.preload = function(){

	}
}
