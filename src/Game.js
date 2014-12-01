function Game() {
	this.player = new Player();
	this.frameSet = setFrames();
};


//puts 10 frames in frameSet
var setFrames = function(){
	frameArray = [];
	for(var i = 0; i < 10; i++){
		frameArray.push(new Frame());
	}
	return frameArray
}




