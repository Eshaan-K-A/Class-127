var leftWristY = 0;
var rightWristY = 0;
var song = "";
function preload(){
    song = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(560, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    img(video, 0, 0, 560, 500);
}