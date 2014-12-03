function Player(frame) {
	this.frame = frame;
	this.tries = 2;
};

Player.prototype.frameCount = function() {
	return this.frame.count();
};

Player.prototype.roll = function(number){
	this.frame.elim(number);
	if (this.tries==2) {this.frame.addRoll1(number);}
		else if(this.tries == 1) {
			this.frame.addRoll2(number);
			this.frame.setFrameScore();
		}
	this.tries = this.tries - 1;
};

Player.prototype.eachFrameScore = function(){
	return this.frame.frameScore;
};

//Note: this should be executed by the game class.
Player.prototype.switchFrame = function(frame){
	this.frame = frame;
	this.tries = 2;
};

// function randomGen(){
// 	return Math.floor(Math.random()*11);
// }

// Player.prototype.rand = function(){
// 	var hit = randomGen();
// 	return hit
// }