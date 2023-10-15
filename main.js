eye_y=0;
eye_x=0;
difference=0

function setup(){
    video=createCapture(VIDEO);
    video.size(500,550)
    canvas=createCanvas(500,450)
    canvas.position(700,150);
    video.position(100,100)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("poseNet is loaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        eye_x=results[0].pose.nose.x;
        eye_y=results[0].pose.nose.y;
        difference=results[0].pose.leftWrist.x-results[0].pose.rightWrist.x
    }
  
}
function draw(){
    background("blue")
    fill("red")
    textSize(difference);
    text('H',eye_x,eye_y);

}