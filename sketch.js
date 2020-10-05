
var playerhand,comphand;
var leftrockimage,leftpaperimage,leftscissorsimage,lefthandimage;
var rightrockimage,rightpaperimage,rightscissorsimage,righthandimage;

var crock,cpaper,cscissors;

var compgamestate = 'play';
var playergamestate = 'choose';
var gamestate = 'start';

var start=1;

var rand;

var a,b,c;
function preload(){
  //Left
    lefthandimage= loadImage("Left_Hand.png");
    leftrockimage= loadImage("Left_Rock.png");
    leftpaperimage= loadImage("Left_Paper.png");
    leftscissorsimage=loadImage("Left_Scissors.png");
  
  //Right
    righthandimage= loadImage("Right_Hand.png");
    rightrockimage= loadImage("Right_Rock.png");
    rightpaperimage= loadImage("Right_Paper.png");
    rightscissorsimage=loadImage("Right_Scissors.png");

}

function setup(){
  createCanvas(400,400)
  
  
  playerhand = createSprite(100,200,20,50);
  playerhand.addImage(lefthandimage);
  playerhand.scale=0.7;
  
  comphand = createSprite(300,200,20,50);
  comphand.addImage(righthandimage);
  comphand.scale=0.7;
  
  //Invisible buttons to click on
  crock = createSprite(103,290,100,30);
  crock.visible=false;
  
  cpaper = createSprite(103,325,100,30);
  cpaper.visible=false;
  
  cscissors = createSprite(103,360,100,30);
  cscissors.visible=false;
  
  start = createSprite(200,50,80,50);
  start.visible=false;
  
}

function draw(){
  background("lightpink");
  
  textSize(24)
  fill("white");
  stroke("black");
  strokeWeight(4);
  text ("Rock",80,300);
  text ("Paper",77,330);
  text ("scissor",72,360);
  
  // player 
  if (playergamestate === 'choose' && (mousePressedOver(crock) || mousePressedOver(cscissors) || mousePressedOver(cpaper))){
    
    
    if (mousePressedOver(crock)){
      playerhand.addImage(leftrockimage);
      playerhand.scale=0.6;
    }
    
    else if (mousePressedOver(cpaper)){
      playerhand.addImage(leftpaperimage);
      playerhand.scale=0.6;
    }
 
    else if (mousePressedOver(cscissors)){
      playerhand.addImage(leftscissorsimage);
      playerhand.scale=0.6;
    }
    playergamestate='choosen';
  }
  
   
  //computer
   
  if (compgamestate === 'play' && (mousePressedOver(crock) || mousePressedOver(cscissors) || mousePressedOver(cpaper))){
    
   rand = Math.round(random(1,3));
   
    switch(rand){

      case 1:   comphand.addImage(rightrockimage);
        comphand.scale=0.6;
        break;
      case 2:    comphand.addImage(rightpaperimage);
        comphand.scale=0.6;
        break;
      case 3:   comphand.addImage(rightscissorsimage);
        comphand.scale=0.6;
        break;
        default: break;
    }
    compgamestate = 'over';
  }
  
  
  // Winner

  if (gamestate ==='start'){
    /*if (leftrockimage){
      if (rand === 1){
        text(" Its A Tie", 150,100);
      }
      else if (rand === 2){
        text(" Computer Wins", 100,100);
      }
      else if (rand === 3){
        text(" Player Wins", 120,100);
      }
    }

     else if (leftpaperimage){
      if (rand === 1){
        text(" Player Wins", 120,100); 
      }
      else if (rand === 2){
        text(" Its A Tie", 150,100);
      }
      else if (rand === 3){
        text("Computer Wins", 100,100);
      }
    }

    else if (leftscissorsimage){
      if (rand === 1){
        text("Computer Wins", 100,100);
      }
      else if (rand === 2){
        text(" Player Wins", 120,100); 
      }
      else if (rand === 3){
        text(" Its A Tie", 150,100);
      }
    }*/
   
    /*if (rand === 1){
      if(mousePressedOver(crock) ){
         text(" Its A Tie", 150,100);
      }
      else if(mousePressedOver(cpaper) ){
          text(" Computer Wins", 100,100);
      }
      else if(mousePressedOver(cscissors) ){
         text(" Player Wins", 100,100);
      }
    }
    
    else if (rand === 2){
      if(mousePressedOver(crock) ){
        
         text(" Player Wins", 100,100);
      }
      else if(mousePressedOver(cpaper) ){
         text(" Its A Tie", 150,100);
      }
      else if(mousePressedOver(cscissors) ){
         text(" Computer Wins", 100,100);
      }
    } 
     else if (rand === 3){
      if(mousePressedOver(crock) ){
         text(" Computer Wins", 100,100);
      }
      else if(mousePressedOver(cpaper) ){
         text(" Player Wins", 100,100);
      }
      else if(mousePressedOver(cscissors) ){
         text(" Its A Tie", 150,100);
      }
    } */
  }
    

  if (playergamestate === 'choosen' && compgamestate === 'over'){
    text(" Start ", 170,60);
    //gamestate = 'start'
  
  }

   if (playergamestate === 'choosen' && compgamestate === 'over'&& mousePressedOver(start)){
  
     playergamestate = 'choose'; 
     compgamestate = 'play';
     playerhand.addImage(lefthandimage);
     comphand.addImage(righthandimage)
     gamestate = 'stop'
  }
  
  drawSprites(); 
  
}

