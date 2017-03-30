
function Cat(game, To_be_con){
	"use strict";
	var leftKey;
	var rightKey;
	var jumpButton;
	var jumpTimer = 0;
	var cursors;

	this.preload = function () {
			game.load.spritesheet('oos', 'assets/sprites/oos.png', 100, 200);
	}


	this.create = function () {
		this.sprite = game.add.sprite(100, 650, 'oos');
		this.sprite.scale.set(.35);
		this.sprite.anchor.setTo(.5, .5);
		//this.sprite.anchor.setTo(.5, .5);
		game.physics.p2.enable(this.sprite);

		jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		cursors = game.input.keyboard.createCursorKeys();

		this.sprite.enableBody = true;
		this.sprite.body.damping = .5;
		this.sprite.body.collideWorldBounds=true;
		this.sprite.body.fixedRotation = true;

		leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
		rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

		game.camera.follow(this.sprite)
		game.camera.deadzone = new Phaser.Rectangle(200, 300, 350, 100)

	}

	this.update = function (){
		if (leftKey.isDown){
			this.sprite.body.moveLeft(350);
			this.sprite.scale.x = -.35;
		} else if (rightKey.isDown){
			this.sprite.body.moveRight(350);
			this.sprite.scale.x = .35;
		}
		game.world.wrap(this.sprite, 0, true);

		if (jumpButton.isDown && game.time.now > jumpTimer && this.checkIfCanJump()) {
			this.sprite.body.moveUp(700);
			jumpTimer = game.time.now + 750;
		}
	}

	this.render = function (){

	}

	this.checkIfCanJump = function() {
		var result = false;
		for (var i=0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++) {
			var c = game.physics.p2.world.narrowphase.contactEquations[i];
			if (c.bodyA === this.sprite.body.data || c.bodyB === this.	sprite.body.data){
				var d = p2.vec2.dot(c.normalA, p2.vec2.fromValues(0, 1));
				if (c.bodyA === this.sprite.body.data){
						d *= -1;
				}
				if (d > 0.5) {
						result = true;
				}
			}
		}
		return result;
	}
}
