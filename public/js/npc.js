
function Npc(game, cat, options) {
	"use strict";

	this.facing = "right";
	this.leftstop = options.leftstop;
	this.rightstop = options.rightstop;

	this.create = function(){
		this.sprite = game.add.sprite(options.x, options.y, 'npc');
		game.physics.p2.enable(this.sprite);
		this.sprite.body.fixedRotation = true;
		this.sprite.body.collideWorldBounds=true;12
		this.sprite.body.data.gravityScale = 5;
		this.sprite.scale.set(1);
	}

	this.update = function() {
		this.sprite.anchor.setTo(.5, .5); //so it flips around its middle

		if(this.facing === "left"){
			this.sprite.body.moveLeft(100);
			this.sprite.scale.x = -1;
		}
		if (this.facing === "right"){
			this.sprite.body.moveRight(100)
			this.sprite.scale.x = 1;
		}

		if(this.sprite.x <= this.leftstop && this.facing === "left"){
			this.facing = "right"
		}
		if(this.sprite.x >= this.rightstop && this.facing === "right"){
			this.facing = "left"
		}
	}

	this.render = function() {

	}

	this.preload = function(){
		game.load.spritesheet('npc', 'assets/sprites/bad_guy_small.png', 63, 200);

	}
}
