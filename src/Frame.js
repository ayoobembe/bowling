function Frame() {
	this.pins = 10;
	this.empty = false;
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

