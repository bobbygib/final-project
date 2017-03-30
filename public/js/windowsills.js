
function Windowsill(game, cat, options) {
	"use strict";

	this.create = function() {
		this.sprite = game.add.sprite(options.x, options.y);

		game.physics.p2.enable(this.sprite);

		this.sprite.body.setRectangle(options.width, options.height);
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
