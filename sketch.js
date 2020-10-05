var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	//make the boxes
	box1Sprite=createSprite(400,650,200,20);
	box1Sprite.shapeColor="red";

	box2Sprite=createSprite(400,650,20,100);
	box2Sprite.shapeColor="red";


	box3Sprite=createSprite(400,650,20,100);
	box3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//make box bodies
	box1Body = Bodies.rectangle(400,650,10,10,{ isStatic:true});
	World.add(world, box1Body);

	box2Body = Bodies.rectangle(300,610,width,10,{ isStatic:true});
	World.add(world, box2Body);

	box3Body = Bodies.rectangle(500,610,width,10,{ isStatic:true});
	World.add(world, box2Body);

	//Create a Ground
	ground = Bodies.rectangle(350, 700, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,0,100);
  
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1Sprite.x= box1Body.position.x 
  box1Sprite.y= box1Body.position.y 

  box2Sprite.x= box2Body.position.x 
  box2Sprite.y= box2Body.position.y 

  box3Sprite.x= box3Body.position.x 
  box3Sprite.y= box3Body.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	
  }
}



