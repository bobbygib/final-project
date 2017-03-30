
function To_be_con(game, cat) {
	"use strict";
	var contin;
	var done = false

	this.create = function() {
		contin = game.add.sprite(0, 0, 'continue');
		contin.visible = false;
	}


	this.update = function() {
		if(!done && cat.sprite.x >= 5300 && cat.sprite.y <= 120){
			done = true;
			console.log(contin.visible)
			contin.visible = true;
			contin.fixedToCamera = true;
			game.camera.unfollow();
		}
	}

	this.render = function() {

	}

	this.preload = function(){
		game.load.spritesheet('continue', 'assets/sprites/to_be_con.png', 800, 600);
	}
}
