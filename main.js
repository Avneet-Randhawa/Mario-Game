
function preload() {
	world_start = loadSound("world_start.wav");
	coin_collected = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video  = createCapture(VIDEO);
	video.size(800,400);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	video.parent("game_console");
}

function modelLoaded(){
	console.log("Model Is Loaded!!!");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

	}
}

function draw() {
	game()
}






