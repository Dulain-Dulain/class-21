const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1 = createImg("up.png")
  button1.position(20,40)
  button1.size(50,50)
  button1.mouseClicked(v_force)
  button2 = createImg("right.png")
  button2.position(220,40)
  button2.size(50,50)
  button2.mouseClicked(h_force)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var options = {
    restitution:0.95
  }
 ball = Bodies.circle(100,100,20,options)
 World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  fill ("purple")
  ellipse (ball.position.x,ball.position.y,20,20)
}
function h_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

