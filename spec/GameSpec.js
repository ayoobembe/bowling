describe('Game',function(){

	describe('Rolling', function(){

		beforeEach(function(){
			game = new Game();
			game.playerRoll1 = jasmine.createSpy("playerRoll1");
			game.playerRoll2 = jasmine.createSpy("playerRoll2");		
		});

		it('Should initialize a player',function(){
			expect(game.hasOwnProperty('player')).toBe(true);
		});

		it('Should hold an array of 10 frames',function(){
			expect(game.frameSet.length).toEqual(10);
		});

		it('calls 2 seperate roll functions', function() {
			game.playerRoll(5);
			expect(game.playerRoll1).toHaveBeenCalled();
			game.player.roll(5);
			game.playerRoll(2);
			expect(game.playerRoll2).toHaveBeenCalled();
		});

		it('Calls playerRoll1 and not playerRoll 2, on 1st roll', function(){
			game.playerRoll(1);
			expect(game.playerRoll1).toHaveBeenCalled();
			expect(game.playerRoll2).not.toHaveBeenCalled();
		});

		it('Calls playerRoll2 and not playerRoll1, on 2nd roll', function() {
			game.player.roll(5);
			game.playerRoll(4);
			expect(game.playerRoll1).not.toHaveBeenCalled();
			expect(game.playerRoll2).toHaveBeenCalled();
		});

	});


	describe("Scoring", function(){

		beforeEach(function(){
			game = new Game();
		});

		it('Should update the totalscore at the end of each roll', function() {
			game = new Game();
			game.playerRoll(3);
			expect(game.totalScore).toEqual(3);
			game.playerRoll(2);
			expect(game.totalScore).toEqual(5);
		}); 

		it('Should move player to the next frame after its second roll', function(){
			expect(game.triesLeft()).toEqual(2);
			expect(game.player.frame).toBe(game.frameSet[0]);
			for(var i=0; i<2; i++){game.playerRoll(3);}
			expect(game.player.frame).toBe(game.frameSet[1]);
		});

 		it('Should know if the player had a strike', function(){
		 	game.playerRoll(10);
		 	expect(game.strike).toBe(true);
		});

		it('Should skip second roll on frame if player has a strike', function(){
			expect(game.player.frame).toBe(game.frameSet[0]);
			game.playerRoll(10);
			expect(game.player.frame).toBe(game.frameSet[1]);
			expect(game.triesLeft()).toEqual(2);
		});

		it('Should assign the player bonus in next immediate roll if player has strike', function(){
			game.playerRoll(10);
			game.playerRoll(5);
			expect(game.player.frame.bonus).toEqual(5);
			expect(game.totalScore).toEqual(20);
			expect(game.triesLeft()).toEqual(1);
		}); 

	

	});

}); 
	



	// it('Should know how many tries a player has left',function(){
	// 	expect(game.triesLeft()).toEqual(2);
	// 	game.playerRoll();//what happens here?
	// 	expect(game.triesLeft()).toEqual(1);
	// });

	// it('Should move a player to the next frame when a frame is done',function(){
	// 	expect(game.player.frame).toBe(game.frameSet[0]);
	// 	for(var i=0; i<2; i++){
	// 		game.playerRoll();
	// 	}
	// 	expect(game.player.frame).toEqual(game.frameSet[1]);
	// 	expect(game.triesLeft()).toEqual(2);
	// });


	// it('Should know if the player had a strike', function(){
	// 	game.playerRoll(10);
	// 	expect(game.strike).toBe(true);
	// }); 

	// it('Should keep count of a players total score', function(){
	// 	game.playerRoll(5);
	// 	game.playerRoll(4);
	// 	expect(game.totalScore).toEqual(9);
	// });

	// it('Should add strike bonus if player has strike', function(){
	// 	game.playerRoll(10);
	// 	game.playerRoll(5);
	// }); 


	// it('Should know if the player has a spare',function(){
	// 	var game = new Game();
	// 	for(var i=0; i<2; i++) {
	// 		game.player.roll(5);	
	// 	}
	// 	// expect(game.player.frameCount()).toEqual(0);
	// 	expect(game.spare).toEqual(true);
	// });	

	// it('Should give player a spare bonus',function(){});

	// it('Should know if the player has a strike',function(){});

	// it('Should give player a strike bonus',function(){});

	// it('',function(){}); 






// Things I need to do:
// 	b) Refactor code so that there are two seperate playerRoll functions:
// 		i) Player roll 1
// 		ii)Player roll 2
// 	a) Fix the scoring mechanism so that:
// 		i) Game keeps track of the players scores
// 		ii)Each frame contains the players score on that frame
// c) Add in functionality to keep track of both spares and strikes

// Once these are done I can begin work on the front end which will
// comprise of two components
// 	a) The score sheet. That calculates scores based on how the game unfolds.
// 	b) The actual animation for the game itself. Including jquery.


