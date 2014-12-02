function Frame() {
	this.pins = 10;
	this.empty = false;
	this.firstRoll = 0;
	this.secondRoll = 0;
	this.bonus = 0;
	this.frameScore = 0;
};

Frame.prototype.elim = function(n){
	this.pins = this.pins - n;
	if(this.pins==0) {
		this.empty = true;
	};
};

Frame.prototype.isEmpty = function(){
	return this.empty;
};

Frame.prototype.count = function(){
	return this.pins;
};

Frame.prototype.addRoll1 = function(shot1){
	this.firstRoll = shot1;
};

Frame.prototype.addRoll2 = function(shot2){
	this.secondRoll = shot2;
};

Frame.prototype.addBonus = function(bonus){
	this.bonus = bonus;
};

Frame.prototype.setFrameScore = function(){
	this.frameScore = (this.firstRoll + this.secondRoll + this.bonus);
};



//Note: the frame should be able to keep the score of the player
//
//
//