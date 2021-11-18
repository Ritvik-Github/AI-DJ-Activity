song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);

    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Initialized ✔");
}

function draw(){
    canvas.center();
    image(
        video,
        0,
        0,
        600,
        500
    );
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("==Left Wrist==");
        console.log("Left Wrist X: " + leftWristX +"Left Wrist Y: " + leftWristY);
        console.log("==Right Wrist==");
        console.log("Right Wrist X: " + rightWristX +"Right Wrist Y: " + rightWristY);
    }
}