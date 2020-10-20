
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5,bob1Diameter;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(20,20,800,20);
	
	bob1 = new Bob(100,320,50);
	bob2 = new Bob(150,320,50);
	bob3 = new Bob(200,320,50);
	bob4 = new Bob(250,320,50);
	bob5 = new Bob(300,320,50);

	string1 = new String(bob1.body,{x:100,y:10});
	string2 = new String(bob2.body,{x:150,y:10});
	string3 = new String(bob3.body,{x:200,y:10});
	string4 = new String(bob4.body,{x:250,y:10});
	string5 = new String(bob5.body,{x:300,y:10});


}


function draw() {
	
  background("lightblue");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}



