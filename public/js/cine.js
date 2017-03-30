
function cine(game, menu_state) {
	"use strict";
	//var cat = new Cat(game);
	var camera = new Camera (game);
	var inCine = true;
	var timer = 0;
	var framTimer = 0;
	var isShowing = false;
	var home;
	var bed;
	var denver;
	var grass;
	var skip;
	var cat_cine;
	var berby;
	var oos_talk;


	this.create = function() {
		game.physics.startSystem(Phaser.Physics.P2JS);
		skip = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)


		denver = game.add.sprite(-275, -200, 'denver');
		grass = game.add.sprite(-275, -200, 'grass');
		bed = game.add.sprite(-275, -200, 'bed');
		home = game.add.sprite(-275, -200, 'home');

		cat_cine = game.add.sprite(300, 450, 'oos')
		cat_cine.scale.set(.6);
		cat_cine.anchor.setTo(.5, .5);
		cat_cine.visible = false;

		berby = game.add.sprite(-225, -175, 'berby')
		berby.visible = false;

		oos_talk = game.add.sprite(-225, 400, 'oos_talk')
		oos_talk.visible = false;

		//game.physics.p2.enable(cat_cine)

	}

	this.update = function() {
		//console.log(framTimer)
		if(inCine === true){
			framTimer +=.01
		}
		if(framTimer <= 1.2 && framTimer >= 0){
			home.visible = true;
		}else if(framTimer <= 5){
			home.visible = false;
			bed.visible = true;
			cat_cine.visible = true;
			berby.visible = true;
			console.log('a')
		}else if(framTimer <= 8){
			berby.visible = false;
			cat_cine.x += 2;
			oos_talk.visible = true;
			console.log('b')
		}else if(framTimer <= 8.01){
			oos_talk.visible = false;
			home.visible = true;
			bed.visible = false;
			cat_cine.x = 300;
			cat_cine.y = 450;
			console.log('c')
		}else if(framTimer <= 11){
			cat_cine.x += 2;
			console.log('d')
		}else if(framTimer <= 11.01){
			home.visible = false;
			grass.visible = true;
			cat_cine.x = -100
			cat_cine.y = 450
			console.log('e')
		}else if(framTimer <= 16){
			cat_cine.x += 2;
			console.log('f')
		}else if(framTimer <= 17.5){
			cat_cine.visible = false;
			grass.visible = false;
			denver.visible = true;
		}
		if(skip.isDown || framTimer >= 18){
			this.game.sound.stopAll();
			this.game.world.scale.setTo(1, 1);
			this.game.state.start("Level_1")
		}
	}

	this.render = function() {
	}

	this.preload = function(){
		game.load.spritesheet('oos', 'assets/sprites/oos.png', 100, 200);
		game.load.spritesheet('berby', 'assets/sprites/berby.png', 800, 600);
		game.load.spritesheet('oos_talk', 'assets/sprites/oos_text.png', 800, 600);
	}
}
