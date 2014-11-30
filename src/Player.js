function Player() {
	this.frame = new Frame();
	this.tries = 2;
	this.score = 0;
};

Player.prototype.frameCount = function() {
	return this.frame.count();
};

Player.prototype.roll = function(number){
	this.frame.elim(number);
	this.tries = this.tries - 1;
	this.updateScore(number);
};

Player.prototype.updateScore = function(number){
	this.score = this.score + number;
};