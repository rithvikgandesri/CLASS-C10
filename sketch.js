var sea,ship

function preload(){
shiping = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaing = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
sea.addImage("sea",seaing)
sea.velocityX=-5
sea.scale =0.3
ship = createSprite(130,200,30,30)
ship.addAnimation("moving",shiping)
ship.scale =0.2

}

function draw() {
  background("blue");
 if(sea.x<0)
 {sea.x=400

}
drawSprites()
}