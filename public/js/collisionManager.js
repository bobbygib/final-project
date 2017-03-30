
function CollisionManager(game, cat, floor, npcs, walkway, windowsills, hairball, menu_state) {
	"use strict";
	this.catCollisionGroup;
	this.floorCollisionGroup;
	this.npcCollisionGroup;
	this.walkwayCollisionGroup;
	this.windowsillCollisionGroup;
	this.hairballCollisionGroup;
	var cursors;
	var game_over;
	var restart_game;


	this.create = function() {
		cursors = game.input.keyboard.createCursorKeys();
		restart_game = game.input.keyboard.addKey(Phaser.Keyboard.ENTER)

		this.catCollisionGroup = game.physics.p2.createCollisionGroup();
		this.floorCollisionGroup = game.physics.p2.createCollisionGroup();
		this.npcCollisionGroup = game.physics.p2.createCollisionGroup();
		this.walkwayCollisionGroup = game.physics.p2.createCollisionGroup();
		this.windowsillCollisionGroup = game.physics.p2.createCollisionGroup();
		this.hairballCollisionGroup = game.physics.p2.createCollisionGroup();

		game.physics.p2.updateBoundsCollisionGroup();
		game.physics.p2.setBoundsToWorld()

		floor.sprite.body.setCollisionGroup(this.floorCollisionGroup);
		walkway.sprite.body.setCollisionGroup(this.walkwayCollisionGroup);

		cat.sprite.body.setCollisionGroup(this.catCollisionGroup);

		hairball.spriteGroup.forEach(function(h){
			h.body.setCollisionGroup(this.hairballCollisionGroup)
			h.body.onBeginContact.add(function(body) {
				//console.log(body)
				this.npcHairCollision(h, body)
			}.bind(this)); // here
		}.bind(this));



		for ( var npc of npcs ){
			npc.sprite.body.enable = true;
			npc.sprite.body.setCollisionGroup(this.npcCollisionGroup);
			npc.sprite.body.collides([this.catCollisionGroup, this.floorCollisionGroup, this.walkwayCollisionGroup, this.hairballCollisionGroup]);
		}

		for ( var windowsill of windowsills){
			windowsill.sprite.body.setCollisionGroup(this.windowsillCollisionGroup);
			windowsill.sprite.body.collides(this.catCollisionGroup);
		}

		hairball.spriteGroup.forEach(function(hc){
			hc.body.collides([this.npcCollisionGroup, this.floorCollisionGroup, this.walkwayCollisionGroup])
		}.bind(this))

		cat.sprite.body.onBeginContact.add(this.npcCatCollision);
		cat.sprite.body.collides([this.floorCollisionGroup, this.npcCollisionGroup, this.walkwayCollisionGroup, this.windowsillCollisionGroup]);

		floor.sprite.body.collides([this.catCollisionGroup, this.npcCollisionGroup, this.hairballCollisionGroup]);
		walkway.sprite.body.collides([this.catCollisionGroup, this.npcCollisionGroup, this.hairballCollisionGroup])

		//game.physics.moveToObject(game_over, cat.sprite)
		game_over = game.add.sprite(-150, 0, 'game_over');
		game_over.visible = false;
	}

	this.npcCatCollision = function(body){
		if(body != null){

			if(body.sprite.key === 'npc' && body.enable){
				cat.sprite.body.fixedRotation = false;
				cat.sprite.body.data.gravityScale = 0;
				cat.sprite.body.data.shapes[0].sensor = true;
				game_over.visible = true;
				game_over.fixedToCamera = true;
				game.camera.unfollow();
			}
		}
	}

	this.npcHairCollision = function(h, body){
		if(body != null){
			if(body.sprite.key === 'npc'){
				body.data.shapes[0].sensor = true;
				h.destroy()
				body.fixedRotation = false
				body.data.gravityScale = 1;
				body.enable = false;
				//body.data.shapes[0].sensor = true;

			}
		}
	}

	this.update = function() {
		if(game_over.visible && restart_game.isDown){
			game.sound.stopAll();
			game.state.restart("Level_1")
			console.log('restart is down')
		}

	}

	this.render = function() {
		//game.debug.spriteCoords(game_over);

	}

	this.preload = function(){


	}
}
