describe('Game',function(){

	beforeEach(function(){
		game = new Game();
	});

	it('Should initialize a player',function(){
		expect(game.hasOwnProperty('player')).toBe(true);
	});

	it('Should hold an array of 10 frames',function(){
		expect(game.frameSet.length).toEqual(10);
	});

	it('Should know how many tries a player has left',function(){
		expect(game.triesLeft()).toEqual(2);
		game.playerRoll();//what happens here?
		expect(game.triesLeft()).toEqual(1);
		game.playerRoll();
		// expect(game.triesLeft()).toEqual(0);
	});


	it('Should move a player to the next frame when a frame is done',function(){
		expect(game.player.frame).toBe(game.frameSet[0]);
		for(var i=0; i<2; i++){
			game.playerRoll();
		}
		expect(game.player.frame).toEqual(game.frameSet[1]);
		expect(game.triesLeft()).toEqual(2);
	});





	// it('Should know if the player has a spare',function(){
	// 	var game = new Game();
	// 	for(var i=0; i<2; i++) {
	// 		game.player.roll(5);	
	// 	}
	// 	// expect(game.player.frameCount()).toEqual(0);
	// 	expect(game.spare).toEqual(true);
	// });	













	// it('Should give player a spare bonus',function(){

	// });

	// it('Should know if the player has a strike',function(){});

	// it('Should give player a strike bonus',function(){});

	// it('',function(){}); 

}); 