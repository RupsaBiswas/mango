
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var stone;
var boy;
var ground;
var mango1,mango2,mango3,mango4,mango5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	boy=new Boy(200,610,20,100);
	tree= new Tree(300,610,20,100);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



