function Game() {
	this.frameSet = setFrames();
	this.frameIndex = 0;
	this.player = new Player(this.frameSet[this.frameIndex]);
};

Game.prototype.playerTries = function(){
	return this.player.tries;
}

Game.prototype.playerRoll = function(){
	var hit = randomGen();
	if(this.playerTries()>0){
		this.player.roll(hit);
	}
	else{
		this.frameIndex++;
		this.player.switchFrame(this.frameSet[this.frameIndex]);
		this.player.roll(hit);
	}
	
}

//puts 10 frames in frameSet
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





