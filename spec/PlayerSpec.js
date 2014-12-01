describe('Player',function() {

	it('Should have a frame when initialized', function(){
		var player = new Player();
		expect(player.hasOwnProperty('frame')).toBe(true);
	});

	// it('should have a default shot of five', function(){
	// 	var player = new Player();
	// 	player.roll;
	// 	expect(player.frameCount()).toEqual(5);
	// }); 

	it('Roll should modifiy the pin count in its frame', function() {
		var player = new Player();
		expect(player.frameCount()).toEqual(10);
		player.roll(3);
		expect(player.frameCount()).toEqual(7);
	});

	it('Should have 2 tries(or rolls) when initialized', function() {
		var player = new Player();
		expect(player.tries).toEqual(2);
	});

	it('Roll should modify the number of tries left', function() {
		var player = new Player();
		expect(player.tries).toEqual(2);
		player.roll(1);
		expect(player.tries).toEqual(1);
		player.roll(2);
		expect(player.tries).toEqual(0);
	});

	it('Should have a score of 0 when initialized',function(){ 
		var player = new Player();
		expect(player.score).toEqual(0);
	});

	it('Should be able to update its score', function() {
		var player = new Player();
		player.updateScore(4);
		expect(player.score).toEqual(4);
	}); 

	it('should update its score on each roll', function() {
		var player = new Player();
		var luckyShot = 6;
		player.roll(luckyShot);
		expect(player.score).toEqual(luckyShot);
	});


}); 