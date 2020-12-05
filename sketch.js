
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];

function preload()
{
	
}

function setup() {
	createCanvas(458, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,695,480,10);

	div1 = new Division(240, 690, 480,5);
	div2 = new Division(5, 592, 5,200);
	div3 = new Division(80, 592, 5,200);
	div4 = new Division(155, 592, 5,200);
	div5 = new Division(230, 592, 5,200);
	div6 = new Division(305, 592, 5,200);
	div7 = new Division(380, 592, 5,200);
    div8 = new Division(455, 592, 5,200);

	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);
	plinko1 = new Plinko(50,100,20);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display(); 
  div6.display();
  div7.display();
  div8.display();

  plinko1.display();

  if (frameCount%60 === 0)
  {
	  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  drawSprites();
 
}



