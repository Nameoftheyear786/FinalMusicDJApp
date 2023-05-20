song1 = "";
song2 = "";
scoreLeftWrist = 0;
scorerightWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNext.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results(0).pose.leftWrist.x;
        leftWristY = results(0).pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        scorerightWrist = results[0].pose.keypoint[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
        rightWristX = results(0).pose.rightWrist.x;
        rightWristY = results(0).pose.rightWrist.y;

        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2) {
        circle(rightWristx,rightWistY,20);
        song1.stop();
    }
    if(song1 == false){
        song1.play();
    }

    if(scoreRightWrist > 0.2) {
        circle(rightWristx,rightWistY,20);
        song2.stop();
    }
    if(song2 == false){
        song2.play();
    }
}

