const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint= Matter.Constraint;

var boy,mango;
var stone,tree;
var ground;

function preload()
{
	boy=loadImage ("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(width/2,600,width,20);

	Engine.run(engine);
  stone = new Stone(235,420,30);
  


}


function draw() {
  rectMode(CENTER)
  background(0);
  

stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

detectCollison(stoneObj,mango1);
detectCollison(stoneObj,mango2);
detectCollison(stoneObj,mango3);
detectCollison(stoneObj,mango4);
detectCollison(stoneObj,mango5);

  drawSprites();
 
}
function detectCollison(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		launcherObject.attach(stoneObj.body);
	}
}


