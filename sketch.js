const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies

var eng,ground,world,ball;
function setup() {
 createCanvas(800,400);
var ground_options=
{
 isStatic:true
}
var ball_options=
{
 restitution:1
}
 eng=Engine.create();
world=eng.world;
ground=Bodies.rectangle(400,390,400,20,ground_options);
World.add(world,ground)
ball=Bodies.circle(400,100,20,ball_options)
World.add(world,ball)

}

function draw() {
  background(0); 
  Engine.update(eng);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}