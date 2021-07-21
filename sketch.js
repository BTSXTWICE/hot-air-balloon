var balloon,balloonImage1,balloonImage2;
 var db;
 var pos;
 

// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
 
  createCanvas(1000,1000);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  db=firebase.database();
   db.ref('balloon/height').on("value",readPos) 
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
             writePos(-1,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
                writePos(1,0);   
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
               writePos(0,-1);
    //write code to move air balloon in up direction
    balloon.scale=balloon.scale -0.01

  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
               writePos(0,+1);
    //write code to move air balloon in down direction
    balloon.scale=balloon.scale +0.01
  }

  drawSprites();






  fill(0);
  stroke("white");
  textSize(25);
  text("Use arrow keys to move Hot Air Balloon!",40,40);
}
function changePosition(x,y){
  balloon.x=balloon.x+x;
  balloon.y=balloon.y+y;
  }
  function readPos(rs){
    pos=rs.val()
    balloon.x=pos.x
    balloon.y=pos.y
    
  }
  function writePos(s,k){
    db.ref('balloon/height').set({x:pos.x+s,y:pos.y+k})
  }
  