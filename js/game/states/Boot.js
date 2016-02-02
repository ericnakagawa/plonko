var gameWidth = 640;
var gameHeight = 1136;

var Plonko = function() {

};

Plonko.Boot = function() {

};

Plonko.Boot.prototype = {
	preload: function() {
		this.load.image('logo', 'assets/images/logo.png');
		this.load.image('preloadBar', 'assets/images/preloader-bar.png');

	},
	create: function() {
		this.game.stage.backgroundColor = '#fff';

		if (this.game.device.desktop) {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.minWidth = gameWidth/2;
			this.scale.minHeight = gameHeight/2;
			this.scale.maxWidth = gameWidth;
			this.scale.maxHeight = gameHeight;
			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;
			this.scale.updateLayout(true);
		} else {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.minWidth = gameWidth/2;
			this.scale.minHeight = gameHeight/2;
			this.scale.maxWidth = 2048; //You can change this to gameWidth*2.5 if needed
			this.scale.maxHeight = 1228; //Make sure these values are proportional to the gameWidth and gameHeight
			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;
			this.scale.forceOrientation(true, false);
			// this.scale.hasResized.add(gameResized, this);
			this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
			this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
			this.scale.updateLayout(true);
		}

		this.state.start('Preloader');

		var ow = parseInt(this.game.canvas.style.width,10);
		var oh = parseInt(this.game.canvas.style.height,10);
		var r = Math.max(window.innerWidth/ow,window.innerHeight/oh);
		var nw = ow*r;
		var nh = oh*r;
		this.game.canvas.style.width = nw+"px";
		this.game.canvas.style.height= nh+"px";
		this.game.canvas.style.marginLeft = (window.innerWidth/2 - nw/2)+"px";
		this.game.canvas.style.marginTop = (window.innerHeight/2 - nh/2)+"px";
		// document.getElementById("game").style.width = window.innerWidth+"px";
		// document.getElementById("game").style.height = window.innerHeight-1+"px"; //The css for body includes 1px top margin, I believe this is the cause for this -1
		// document.getElementById("game").style.overflow = "hidden";
	},
	enterIncorrectOrientation: function(event, message){
	    // do stuff here when in incorrect orientation
    	console.log('You now have incorrect orientation');
	}, 
	leaveIncorrectOrientation: function(event, message){
	    // do stuff here when in correct orientation
    	 console.log('You now have orientation');
	},
	gameResized: function(event, message){

	}

};

function gameResized(event, message) {
	console.log('Game Resized:', message);
}

// Plonko.Boot.prototype = {
// 	preload: function() {
// 		this.load.image('logo', 'assets/images/logo.png');
// 		this.load.image('preloadBar', 'assets/images/preloader-bar.png');

// 	},
// 	create: function() {
// 		this.game.stage.backgroundColor = '#fff';
// 		if(this.game.device.desktop) {
// 			this.scale.pageAlignHorizontally = true;
// 		} else {
// 			this.scale.scaleMode = Phaser.scaleManager.SHOW_ALL;
// 			this.scale.minWidth = 568;
// 			this.scale.minHeight = 600;
// 			this.scale.maxWidth = 2048;
// 			this.scale.maxHeight = 1536;
// 			this.scale.forceLandscape = true;
// 			this.scale.pageAlignHorizontally = true;
// 			this.scale.setScreenSize(true);
// 		}

// 		this.state.start('Preloader');

// 	}
// };
