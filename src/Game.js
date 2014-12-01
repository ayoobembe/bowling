function Game() {
	this.frameSet = setFrames();
	this.player = new Player(this.frameSet[0]);
};

Game.prototype.playerTries = function(){
	return this.player.tries;
}

//puts 10 frames in frameSet
var setFrames = function(){
	frameArray = [];
	for(var i = 0; i < 10; i++){
		frameArray.push(new Frame());
	}
	return frameArray
}




