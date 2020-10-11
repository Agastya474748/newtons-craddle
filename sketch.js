var ground,box1,box2,box3,paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	
	ground = new Ground(width/2,150, width, 10 );

  paper1 = new Paper(250,550,40)
  paper2 = new Paper(330,550,40)
  paper3 = new Paper(410,550,40)
  paper4 = new Paper(490,550,40)
  paper5 = new Paper(570,550,40)
  paper6 = new Paper(630,550,40)
  chain1 = new Chain(paper1.body,{x:250,y:150})
	 
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  Engine.update(engine);
  ground.display()

  paper1.display()
  paper2.display()
  paper3.display()
  paper4.display()
  paper5.display()
  paper6.display()
  chain1.display()
}       

function keyPressed(){
	if(keyCode===UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
	}
}