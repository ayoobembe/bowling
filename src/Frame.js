function Frame() {
	this.pins = 10;
	this.empty = false;
	this.frameScore = [0,0,0];
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
	this.frameScore[0] = shot1;
};

Frame.prototype.addRoll2 = function(shot2){
	this.frameScore[1] = shot2;
};

Frame.prototype.addBonus = function(bonus){
	this.frameScore[2] = bonus;
};
