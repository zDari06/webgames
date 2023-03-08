//global
//P5.play MUST BE ENABLED (So können mehrere gleichzeitig)

//ball (map)
var ballX;
var ballY;
var ballWidth = 30;
var ballHeight = 30;
var ballSpeed = 5;
var ballDirectionX = -1;
var ballDirectionY = 1;

//player1
var p1X = 10;
var p1Y = 350;
//player2
var p2X = 1790;
var p2Y = 350;
//playersize
var playerWidth = 20;
var playerHeight = 150;
var pSpeed = 5;

//scoreboard
var p1Score = 0;
var p2Score = 0;

//Functions
var stage = 0;
//0 = splash
//1 = pong

function setup() {
    createCanvas(1800, 1000);
    //initial ball position
    rectMode(CENTER);
    ballX = width/2;
    ballY = height/2;

    textAlign(CENTER);
}

function draw(){
    if(stage == 0){
        splash();
    }
    
    if(stage == 1){
        pong();
    }

    if(mouseIsPressed == true){
        stage = 1; //start pong
    }

    if(stage ==2){
        p1Wins();
    }

    if(stage ==3){
        p2Wins();
    }
}

function splash(){
    //welcome screen
    background(0);
    fill(255);

    textSize(150);
    text('PONG', width/2, 200);

    textSize(50);
    text('Have fun', width/2, 250);

    textSize(40);
    text('Click to start', width/2, 450);

}

function p1Wins(){
    //p1 win screen
    background(0);
    fill(255);

    textSize(150);
    text('PLAYER 1 WINS', width/2, 200);

    textSize(50);
    text('REFRESH TO TRY AGAIN', width/2, 250);
    

}

function p2Wins(){
    //p2 win screen
    background(0);
    fill(255);

    textSize(150);
    text('PLAYER 2 WINS', width/2, 200);

    textSize(50);
    text('REFRESH TO TRY AGAIN', width/2, 250);

}

function pong() {
    //call function
    movement();//loop keys

    background(200);
    noFill(200);
    stroke(255);
    rect(width/2, height/2,width, height); //outer border 
    line(450, 0, 450, height) //center line
    
    //ball colors (=map)
    fill(0);
    noStroke(); //no border

    //draw ball
    rect(ballX,ballY, ballHeight, ballWidth)

    //draw players
    rect(p1X, p1Y, playerWidth, playerHeight);
    rect(p2X, p2Y, playerWidth, playerHeight);

    //physics
    ballX = ballX + (ballDirectionX*ballSpeed); //horizontal
    ballY = ballY + (ballDirectionY*ballSpeed); //vertikal

    //collisions walls
    if(ballY >= height){
        //hit bottom wall
        ballDirectionY = ballDirectionY*-1; //ändert Richtung
    }

    if(ballY <=0){
        //hit top wall
        ballDirectionY = ballDirectionY*-1; //ändert Richtung
    }

    //collide with paddles
    if(ballX >= p1X-10 && ballX <= p1X+10 && ballY >= p1Y-50 && ballY <= p1Y+50){
        //hit placer
        ballDirectionX = ballDirectionX*-1; //ändert Richtung
    }

    //collide with paddles
    if(ballX >= p2X-10 && ballX <= p2X+10 && ballY >= p2Y-50 && ballY <= p2Y+50){
        //hit placer
        ballDirectionX = ballDirectionX*-1; //ändert Richtung
    }

    //scoreboard
    textSize(50);
    text(p1Score, 800, 40);
    text(p2Score, 1000, 40);

    if(ballX <= 0){
        //player1 missed
        p2Score = p2Score+1; //add point
        ballX = width/2;
        ballY = height/2;
    }

    if(ballX >= width){
        //player1 missed
        p1Score = p1Score+1; //add point
        ballX = width/2;
        ballY = height/2;
    }

    if(p1Score>= 10){
        stage =2; //run p1wins
    }

    if(p2Score>= 10){
        stage =3; //run p1wins
    }
}

function movement(){
    if(keyIsDown(87)){
        p1Y = p1Y-pSpeed;
    }//close w

    if(keyIsDown(83)){
        p1Y = p1Y+pSpeed;
    }//close s

    if(keyIsDown(38)){
        p2Y = p2Y-pSpeed;
    }//close s

    if(keyIsDown(40)){
        p2Y = p2Y+pSpeed;
    }//close s
}