
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj

function preload(){
	dustbinOBJ=loadImage("images/dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObj = new paper(50,height - 90,40);


	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinOBJ.display();
  paperObj.display();

}

function keyPressed()
{

  if (keyCode === UP_ARROW)
  {

     Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 400, y: -300});

  } 

}