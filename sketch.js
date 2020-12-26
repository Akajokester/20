var car, wall;
var speed, weight;

function setup() {
  createCanvas(1243,700);
speed=random(55,90)
weight=random(400,1500)

 car=createSprite(50, 350, 50, 50);
car.velocityX = speed;

wall=createSprite(1200,350,40,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background("black");  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color("red");
  }

  
  if(deformation<180 && deformation>100) {
  car.shapeColor=color("yellow"); 
}
  
  if(deformation<100)
  {
    car.shapeColor=color("lime");
  }
  }
  drawSprites();
}
