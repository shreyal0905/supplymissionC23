var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1,line2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1Sprite = createSprite(400,650,200,20);
	line1Sprite.shapeColor=color(255,0,0)

	line2Sprite = createSprite(300,610,20,100);
	line2Sprite.shapeColor=color(255,0,0)

	line3Sprite = createSprite(500,610,20,100);
	line3Sprite.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400, 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //create a red box 
	 line1 = Bodies.rectangle(400,650,20,200,{isStatic:true});
	 World.add(world , line1);
	 //line1.shapeColor=color(255);

	 line2 = Bodies.rectangle(400,650,20,100,{isStatic:true});
	 World.add(world,line2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);
	
	'setScale'; 0.5,
	'restitution';0.5
	
  
}
}


