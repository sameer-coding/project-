var bg,bgImg;
var jotaro, shooterImg, shooter_shooting;


function preload(){
 shooterImg=loadImage("shooter_2.png");
 shooter_shooting=loadImage("shooter_3.png");
bgImg=loadImage("bg.jpeg");
 

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale=1.1;
  

//creating the player sprite
jotaro = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
jotaro.addImage(shooterImg);
jotaro.scale=0.3;
jotaro.debug=true
   jotaro.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  jotaro.y=jotaro.y-30;
  
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 jotaro.y=jotaro.y+30;
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
jotaro.addImage(shooter_shooting);
 
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 jotaro.addImage(shooterImg);
}

drawSprites();

}
