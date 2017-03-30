
function level_1(game){
	var cursors;
	var cat = new Cat(game, cursors);
	var bgmanager = new Bgmanager(game);
	var floor = new Floor(game, cat);
	var walkway = new Walkway(game, cat);
	var hairball = new Hairball(game, cat);
	var music = new Music(game)


	var npcs = [

		new Npc(game, cat, {x: 400, y:600, leftstop: 400, rightstop: 1200}),
		new Npc(game, cat, {x: 1200, y:600, leftstop: 750, rightstop: 1400}),
		new Npc(game, cat, {x: 1400, y:470, leftstop: 1300, rightstop: 1800}),
		new Npc(game, cat, {x: 2200, y:600, leftstop: 1500, rightstop: 2300}),
		new Npc(game, cat, {x: 2400, y:600, leftstop: 2600, rightstop: 3200}),
		new Npc(game, cat, {x: 3200, y:600, leftstop: 3100, rightstop: 3800}),
		new Npc(game, cat, {x: 3900, y:600, leftstop: 3800, rightstop: 4600}),
		new Npc(game, cat, {x: 4600, y:600, leftstop: 4500, rightstop: 5100}),
		new Npc(game, cat, {x: 5200, y:600, leftstop: 5000, rightstop: 5300})
		]

	var windowsills = [
		//line above dumpster
		new Windowsill(game, cat, {x:4999, y:500, width:133, height:5}),
		//lower windwsills
		new Windowsill(game, cat, {x:5133, y:450, width:35, height:5}),
		new Windowsill(game, cat, {x:5291, y:450, width:85, height:5}),
		new Windowsill(game, cat, {x:5440, y:450, width:35, height:5}),
		//upper windowsills
		new Windowsill(game, cat, {x:5133, y:282, width:60, height:5}),
		new Windowsill(game, cat, {x:5291, y:282, width:85, height:5}),
		new Windowsill(game, cat, {x:5440, y:282, width:35, height:5}),
		//line on top of roof of alpha
		new Windowsill(game, cat, {x:5295, y:120, width:370, height:5})
	]

	var collisionManager = new CollisionManager(game, cat, floor, npcs, walkway, windowsills, hairball);
	var camera = new Camera (game, cat);
	var time = 0;
	var state = "play";
	var g;
	var lighting = new Lighting(game)
	var rect;
	var graphics;
	var opacity = 1;
	var isFading = true;
	var to_be_con = new To_be_con(game, cat)


	this.preload = function() {
		bgmanager.preload();
		camera.preload();
		cat.preload ();
		for (var npc of npcs){
			npc.preload ();
		}
		music.preload();
		floor.preload();
		walkway.preload();
		hairball.preload();
		for(var windowsill of windowsills){
			windowsill.preload();
		}
		collisionManager.preload();
		to_be_con.preload();
		lighting.preload();
	}

	this.create = function(){
		// graphics = game.add.graphics(0, 0);
		// graphics.drawRect(-550, -400, 2200, 1600)
		// graphics.endFill()

		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.physics.p2.gravity.y = 700;
	  game.physics.p2.world.defaultContactMaterial.friction = .99;
		game.physics.p2.restitution = .1;
	  game.physics.p2.world.setGlobalStiffness(1e5);

		bgmanager.create();
		camera.create();
		hairball.create();
		cat.create();
		for(var npc of npcs){
			npc.create();
		}
		music.create();
		floor.create();
		walkway.create();
		//hairball.create();
		for(var windowsill of windowsills){
			windowsill.create();
		}
		collisionManager.create();
		to_be_con.create();
		lighting.create();
	}


	this.update = function() {
		// if(isFading === true){
		// 	opacity -= .001
		// 	}
		// if(opacity >= 0.2){
		// 	isfading = false
		// }
		bgmanager.update();
		camera.update();
		cat.update ();
		for(var npc of npcs){
			npc.update();
		}
		floor.update();
		walkway.update();
		for(var windowsill of windowsills){
			windowsill.update();
		}
		music.update();
		hairball.update();
		collisionManager.update();
		to_be_con.update();
		lighting.update();
	}


	this.render = function(){
		// if(isFading){
		// 	graphics.beginFill(0x000000)
		// 	graphics.fillAlpha = opacity
		// 	graphics.drawRect(-550, -400, 2200, 1600)
		// 	graphics.endFill()
		// 	console.log('this is working!')
		// }


		bgmanager.render();
		camera.render();
		cat.render();
		for(var npc of npcs){
			npc.render();
		}
		music.render();
		floor.render();
		walkway.render();
		for(var windowsill of windowsills){
			windowsill.render();
		}
		hairball.render();
		collisionManager.render();
		to_be_con.render();
		lighting.render();
	}
}
