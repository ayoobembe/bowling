describe('Frame',function(){

	beforeEach(function() {
		frame = new Frame();
	});	

	it('Is initialized with ten pins',function(){
		expect(frame.pins).toEqual(10);
	});


	it("Can modify the number of pins after a roll",function(){
		frame.elim(5);
		expect(frame.pins).toEqual(5);
	});

	it('Knows how many pins it contains',function(){
		expect(frame.count()).toEqual(10);
		frame.elim(3);
		expect(frame.count()).toEqual(7);
	});	

	it('Knows when it is empty', function() {
		frame.elim(10);
		expect(frame.isEmpty()).toBe(true);
	});


	it('Should have a record of players frame score',function(){
		frame.addRoll1(5);
		expect(frame.firstRoll).toEqual(5);
		frame.addRoll2(4);
		expect(frame.secondRoll).toEqual(4);
	});

	it('Should have a record of players frame bonus',function(){
		frame.addBonus(4);
		expect(frame.bonus).toEqual(4);
	});

	it('Should know the players score on that frame', function() {
		frame.addRoll1(5);
		frame.addRoll2(4);
		frame.addBonus(2);
		frame.setFrameScore();
		expect(frame.frameScore).toEqual(11);
	}); 

	

	// it('',function(){

	// });

});