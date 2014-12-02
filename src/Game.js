function Game() {
	this.frameSet = setFrames();
	this.frameIndex = 0;
	this.player = new Player(this.frameSet[this.frameIndex]);

	this.spare = false;
	this.strike = false;
	this.totalScore = 0;
};

Game.prototype.triesLeft = function(){
	return this.player.tries;
};

Game.prototype.playerRoll1 = function(number) {
	this.player.roll(number);
}

Game.prototype.playerRoll = function(number) {
	if(this.triesLeft()==2){
		this.playerRoll1();
	}
	else if(this.triesLeft()==1){
		this.playerRoll2();
	}
};

Game.prototype.checkBonus = function(number){
	if(this.triesLeft()==2){
		if(number==10){
			this.strike = true;
		}	
	}
};



	// if(this.triesLeft()==2){
	// 	this.checkBonus(number);
	// 	this.player.roll(number);
	// }
	// else if(this.triesLeft()==1){
	// 	this.player.roll(number);
	// 	this.frameIndex++;
	// 	this.player.switchFrame(this.frameSet[this.frameIndex]);
	// }

var setFrames = function(){
	frameArray = [];
	for(var i = 0; i < 10; i++){
		frameArray.push(new Frame());
	}
	return frameArray
}


function randomGen(){
	return Math.floor(Math.random()*11);
}

Game.prototype.setSpare = function(){
	this.spare = !this.spare
}





















// Game.prototype.playerTries = function(){
// 	return this.player.tries;
// }

// Game.prototype.playerRoll = function(){
// 	var hit = randomGen();
// 	if(this.playerTries()==2){
// 		this.player.roll(hit);
// 	}
// 	else if(this.playerTries()==1){
// 		this.player.roll(hit);
// 	}
// 	else{
// 		alert(this.player.frameCount());
// 		if(this.player.frameCount()==0){
// 			this.spare = true;
// 			// setSpare();
// 		}
// 		this.frameIndex++;
// 		this.player.switchFrame(this.frameSet[this.frameIndex]);
// 		this.player.roll(hit);
// 	}
// }