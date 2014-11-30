function Player() {
	this.frame = new Frame();
	this.tries = 2;
};

Player.prototype.frameCount = function() {
	return this.frame.count();
};

Player.prototype.roll = function(number){
	this.frame.elim(number);
};