var jaxon;
var jaxonImg;
var path;
var pathImg1;
function preload(){
  //pre-load images
  jaxonImg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg1 = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg1);
  path.velocityY = 4;
  path.scale = 1.2;

  jaxon = createSprite(200,200);
  jaxon.addAnimation("running", jaxonImg);
  jaxon.velocityY = 4;
  jaxon.scale = 0.1;



}

function draw() {
  background(0);
  
  if(path.y > 400){
    path.y = height>2;
  }

  jaxon.x = World.mouseX;
  
  edges = createEdgeSprites();
  jaxon.collide(edges[3]);

  drawSprites();
}
