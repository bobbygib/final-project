
function menu_state(game, menu_music, cine) {
	"use strict";
	var enterGame;
	var menu_music = new Menu_music(game);
	var rect
	var graphics;
	var opacity = 0;
	var isFading = false;

	this.create = function() {
		menu_music.create();

		var menu = game.add.sprite(0, 0, 'denver');
		var menu = game.add.sprite(0, 0, 'shade');
		var menu = game.add.sprite(0, -50, 'menu_text')

		enterGame = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)

		this.game.world.scale.setTo(.75, .75);

		graphics = game.add.graphics(0, 0);
		graphics.drawRect(-550, -400, 2200, 1600)
		graphics.endFill();
	}

	this.update = function() {
		menu_music.update();

		if(enterGame.isDown){
			isFading = true;
		}
		if(isFading === true){
			opacity += .01
			}
		if (opacity >= .5){
			//this.game.sound.stopAll();
			//this.game.world.scale.setTo(1, 1);
			this.game.state.start("Cine")
		}
	}

	this.render = function() {
		menu_music.render();
		graphics.beginFill(0x000000)
		graphics.fillAlpha = opacity
		graphics.drawRect(-550, -400, 2200, 1600)
		graphics.endFill()

	}

	this.preload = function(){
		menu_music.preload();
		game.load.audio('shona', ['assets/audio/shona.mp3', 'assets/audio/shona.ogg'], true);


		game.load.image('menu_text', 'assets/sprites/title.png')
		game.load.image('denver', 'assets/sprites/denver_skyline.png');
		game.load.image('shade', 'assets/sprites/dark_test_17.png');


		//level one music
		game.load.audio('other_intro', ['assets/audio/o_intro.mp3', 'assets/audio/o_intro.ogg'], true);

		//preload cine
		game.load.image('home', 'assets/sprites/foh.png')
		game.load.image('bed', 'assets/sprites/bed.png')
		game.load.image('grass', 'assets/sprites/field.png')
		//preload bg for fade load time
		game.load.image('background1', 'assets/sprites/larimer.png');
		game.load.image('background2', 'assets/sprites/drake.png');
		game.load.image('background3', 'assets/sprites/coors_left.png');
		game.load.image('background4', 'assets/sprites/coors.png');
		game.load.image('background5', 'assets/sprites/alpha.png');

		game.load.image('game_over', 'assets/sprites/game_over.png');


	}
}
