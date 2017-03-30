
function Hairball(game, cat, npcs) {
	"use strict";

	this.hairballTimer = 0;

	var shiftKey;

	this.create = function() {

		//var ab = game.add.sprite(400, 400, 'hairball')
		this.spriteGroup = game.add.group(game.world, 'hairballS', false, true, Phaser.Physics.P2JS);
		this.spriteGroup.enableBody = true;
		this.spriteGroup.physicsBodyType = Phaser.Physics.P2JS;
		// this.spriteGroup.create(400, 400, 'hairball')

		this.spriteGroup.createMultiple(1000, 'hairball', 0, false);
		// this.spriteGroup.setAll('anchor.x', 0.5);
		// this.spriteGroup.setAll('anchor.y', 0.5);
		// this.spriteGroup.setAll('outOfBoundsKill', true);
		// this.spriteGroup.setAll('checkWorldBounds', true);

		shiftKey = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
	}

	this.fireHairball = function(){
		if (this.hairballTimer < game.time.now) {

		// Set the timer to now + 1000ms (1 second)
			this.hairballTimer = game.time.now + 2000;

			// Fire the bullet
			var actHair = this.spriteGroup.getFirstExists(false);

			this.a = actHair;
			if (actHair) {
				if (cat.sprite.scale.x < 0){
					this.a.reset(cat.sprite.x, cat.sprite.y -10);
					this.a.body.data.gravityScale = .4;
					this.a.body.velocity.x = -600;
				} else if (cat.sprite.scale.x > 0){
						this.a.reset(cat.sprite.x, cat.sprite.y -10);
						this.a.body.data.gravityScale = .4;
						this.a.body.velocity.x = 600;
				}
				// if (this.hairballTimer = 5000){
				// 	this.a
				// }
			}
		}
		//console.log("wuut")
	}

	this.update = function() {

		if (shiftKey.isDown){
			//console.log("shifty before")
			this.fireHairball();
			console.log("shifty after")
		}

	}

	this.render = function() {
		if(this.a){
		//game.debug.spriteCoords(this.a, 200, 200);
	}
	}

	this.preload = function(){
		game.load.spritesheet('hairball', 'assets/sprites/hairball2.png', 25, 28);
	}
}
