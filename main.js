song = "";

function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    video.hide();
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
}