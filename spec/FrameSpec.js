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

	it('Knows when it is empty',function(){
		frame.elim(10);
		expect(frame.isEmpty()).toBe(true);
	});

	// it('',function(){

	// });

});