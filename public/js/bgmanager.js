
function Bgmanager(game, cat) {
	"use strict";

	this.create = function() {
		game.world.setBounds(0, 0, 5500, 800);
		var bg1 = game.add.sprite(0, 0, 'background1');
		var bg2 = game.add.sprite(1100, 0, 'background2');
		var bg3 = game.add.sprite(2200, 0, 'background3');
		var bg4 = game.add.sprite(3300, 0, 'background4');
		var bg5 = game.add.sprite(4400, 0, 'background5');
	}

	this.update = function() {

	}

	this.render = function() {

	}

	this.preload = function(){
		//game.load.image('home', 'assets/sprite/')
	}
}
