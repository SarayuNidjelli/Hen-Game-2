var hen,  basket;
var gameState = "start";
var egg;

function preload(){
  henImg = loadImage("images/hen.png");
  eggImg = loadImage("images/egg.png");
  basketImg = loadImage("images/basket.png");
}

function setup() {
  createCanvas(2000,800);
   hen = createSprite(400, 200, 50, 50);
   basket = createSprite(200, 750, 50, 50);
   basket.scale = 0.3;

 //  hen.addImage("hen", henImg);
   basket.addImage("basket", basketImg);

   for(var i = 50; i < 1800; i=i+150 ){
    hen = createSprite(i,80,50,50);
    hen.scale = 0.7;
    hen.addImage("hen", henImg);
   }

 
}

function draw() {
  background("pink");  

  
  

  
  
  drawSprites();
}

