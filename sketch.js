var fixedRect, movingRect;
var gameObjet1;
function setup(){
  //Dimensión de videojuego
  createCanvas(1200,800);
  fixedRect = createSprite (200,200,50,80);
  fixedRect.shapeColor="pink";
  movingRect = createSprite (400,200,80,30);
  movingRect.shapeColor="pink";
  gameObjet1=createSprite(100,100,50,50);
  gameObjet1.shapeColor = "yellow";
}

function draw(){
  background("#3399FF");
  movingRect.x= World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObjet1)) {
    movingRect.shapeColor="green";
    gameObjet1.shapeColor="green";
  }
  else{
    movingRect.shapeColor="pink";
   gameObjet1.shapeColor="pink";
  }
  drawSprites();
}

