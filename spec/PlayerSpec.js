describe('Player',function() {

	beforeEach(function(){
		playersFrame = new Frame();
		player = new Player(playersFrame)
	}); 

	it('Should have a frame when initialized', function(){
		expect(player.hasOwnProperty('frame')).toBe(true);
	});

	it('Roll should modifiy the pin count in its frame', function() {
		expect(player.frameCount()).toEqual(10);
		player.roll(3);
		expect(player.frameCount()).toEqual(7);
	});

	it('Should have 2 tries(or rolls) when initialized', function() {
		expect(player.tries).toEqual(2);
	});

	it('Roll should modify the number of tries left', function() {
		expect(player.tries).toEqual(2);
		player.roll(1);
		expect(player.tries).toEqual(1);
		player.roll(2);
		expect(player.tries).toEqual(0);
	});

	it('Should have a score of 0 when initialized',function(){ 
		expect(player.score).toEqual(0);
	});

	it('Should be able to update its score', function() {
		player.updateScore(4);
		expect(player.score).toEqual(4);
	}); 

	it('Should update its score on each roll', function() {
		var luckyShot = 6;
		player.roll(luckyShot);
		expect(player.score).toEqual(luckyShot);
	});

	it('Should be able to have its frame changed', function(){
		expect(player.tries).toEqual(2);
		for(var i = 0; i<2; i++){
			player.roll();
		}
		expect(player.tries).toEqual(0);
		player.switchFrame(new Frame)
		expect(player.tries).toEqual(2);
	}); 


}); 