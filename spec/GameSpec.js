describe('Game',function(){

	it('Should initialize a player',function(){
		var game = new Game();
		expect(game.hasOwnProperty('player')).toBe(true);
	});

	it('Should hold an array of 10 frames',function(){
		var game = new Game();
		expect(game.frameSet.length).toEqual(10);
	});

	it('Should know when a frame(2 tries) is done',function(){});

	it('Should move a player to next frame when done',function(){});

	it('',function(){}); 

}); 