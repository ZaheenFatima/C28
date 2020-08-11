const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeI, tree;
var boyI, boy;
var stone1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var chain1;

function preload()
{
	treeI = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
	boyI = loadImage("Plucking+mangoes/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=createSprite(500,380, 10,10);
	tree.addImage(treeI)
	tree.scale = 0.45

	boy=createSprite(200,580, 10,10);
	boy.addImage(boyI)
	boy.scale = 0.15

   stone1 = new stone(100,480,20,10);

	chain1 = new Slingshot(stone1.body,{x : 260, y : 580 });
   
	mango1 = new mangoes(510,260,20);
	mango2 = new mangoes(450,235,20);
	mango3 = new mangoes(390,290,20);
	mango4 = new mangoes(350,280,20);
	mango5 = new mangoes(420,270,20);
	mango6 = new mangoes(320,325,20);
	mango7 = new mangoes(525,180,20);
	mango8 = new mangoes(530,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stone1.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  chain1.display();

}

function mouseDragged(){
	Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	chain1.fly();
}


