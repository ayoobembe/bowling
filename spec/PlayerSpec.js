describe('Player',function() {

	it('Should have a frame when initialized', function(){
		var player = new Player();
		expect(player.hasOwnProperty('frame')).toBe(true);
	});


	it('Should have 2 tries(or rolls) when initialized', function() {
		var player = new Player();
		expect(player.tries).toEqual(2);
	});

	it('Roll should modifiy the pin count in its frame', function() {
		var player = new Player();
		expect(player.frameCount()).toEqual(10);
		player.roll(3);
		expect(player.frameCount()).toEqual(7);
	});

	it('Roll should modify the number of tries left', function() {
		
	});

	it('should have a score of 0 when initialized',function(){ 

	});

	it('should update its score on each roll', function() {

	});


}); 