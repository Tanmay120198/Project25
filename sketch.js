
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1,log2,log3;
var ball;
var dustbin,dustbinimg;

function preload(){
	dustbinimg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 450);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(500,445,1000,10);

	log1=new Box(805,435,130,10);
	log2=new Box(735,350,10,180);
	log3=new Box(865,350,10,180)
	
	ball=new Ball(100,100,30);

	dustbin = createSprite(800, 350);
    dustbin.addImage(dustbinimg); 
	dustbin.scale=0.55

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  log1.display();
  log2.display();
  log3.display();

  ball.display();
  //keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:205,y:-145});
	}
}


