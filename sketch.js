var sea,ship;
var seaImg,shipImg1;

function preload(){
  // Descomente o código para adicionar animação ao navio

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-2.png","ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(800,800);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,350);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.6;

  
  ship = createSprite(190,525,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  ship.velocityY=-1
  ship.velocityX=+0.1
}

function draw() {
  background(0);
if(ship.y <=515){ship.velocityY=+1}
if(ship.y >=535){ship.velocityY=-1}
  sea.velocityX = -3;

  // Descomente o código para redefinir o fundo
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

 
  drawSprites();
}