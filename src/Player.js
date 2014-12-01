function Player() {
	this.frame = new Frame();
	this.tries = 2;
	this.score = 0;
	this.shot = 0;
};

//Number of pins in the frame
Player.prototype.frameCount = function() {
	return this.frame.count();
};

//A roll reduces number of pins in the frame
Player.prototype.roll = function(number){
	this.frame.elim(number);
	this.tries = this.tries - 1;
	this.updateScore(number);
};

//keeps count of the player's score
Player.prototype.updateScore = function(number){
	this.score = this.score + number;
};


//These functions are used to generate random scores
function randomGen(){
	return Math.floor(Math.random()*11);
}


Player.prototype.rand = function(){
	var hit = randomGen();
	return hit
}