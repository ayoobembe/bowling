describe('Game',function(){

	it('Should initialize a player',function(){
		var game = new Game();
		expect(game.hasOwnProperty('player')).toBe(true);
	});

	it('Should hold an array of 10 frames',function(){
		var game = new Game();
		expect(game.frameSet.length).toEqual(10);
	});

	it('Should know when a frame(2 tries) is done',function(){
		var game = new Game();
		expect(game.player.tries).toEqual(2);
		game.playerRoll();//what happens here?
		game.playerRoll();
		expect(game.playerTries()).toEqual(0);
	});

	it('Should move a player to next frame when a frame is done',function(){
		var game = new Game();
		expect(game.player.frame).toBe(game.frameSet[0]);
		for(var i=0; i<3; i++){
			game.playerRoll();
		}
		expect(game.player.frame).toEqual(game.frameSet[1]);
		expect(game.playerTries()).toEqual(1);
	});

	it('Should give player a spare bonus',function(){});

	it('Should give player a strike bonus',function(){});

	it('',function(){}); 

}); 