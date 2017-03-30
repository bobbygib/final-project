
function Music(game) {
	"use strict";
	var vUp;
	var vDown

	this.create = function() {
		this.music = game.add.audio('other_intro');
		this.music.loop = true
		this.music.play();
		this.music.volume = .1;

		vUp = game.input.keyboard.addKey(Phaser.Keyboard.QUOTES)
		vDown = game.input.keyboard.addKey(Phaser.Keyboard.QUESTION_MARK)
	}

	this.update = function() {
		if (vUp.isDown){
			this.music.volume += .1;
	}
		if (vDown.isDown){
		this.music.volume -= .1;
	}
}

	this.render = function() {
		//game.debug.soundInfo(this.music, 300, 300);
	}

	this.preload = function(){

	}
}
