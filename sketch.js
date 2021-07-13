const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ballOptions = {

		restitution: 0.95
	
	}
	
	roof = Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof);
	
	bob1 = Bodies.circle(300, 200, 25, ballOptions);
  	World.add(world,bob1);

  	bob2 = Bodies.circle(350, 200, 25, ballOptions);
	World.add(world,bob2);
	  
	bob3 = Bodies.circle(400, 200, 25, ballOptions);
	World.add(world,bob3);
	  
	bob4 = Bodies.circle(450, 200, 25, ballOptions);
	World.add(world,bob4);
	  
	bob5 = Bodies.circle(500, 200, 25, ballOptions);
	World.add(world,bob5);

  	var rope1Options = {
		pointA: {x:300,y: 100},
		bodyB: bob1,
		length: 200,
		stiffness: 0.1
	}
	
	rope1 = Constraint.create(rope1Options);
	World.add(world,rope1);


	var rope2Options = {
		pointA: {x:350,y: 100},
		bodyB: bob2,
		length: 200,
		stiffness: 0.1
	}
	
	rope2 = Constraint.create(rope2Options);
	World.add(world,rope2);


	var rope3Options = {
		pointA: {x:400,y: 100},
		bodyB: bob3,
		length: 200,
		stiffness: 0.1
	}
	
	rope3 = Constraint.create(rope3Options);
	World.add(world,rope3);


	var rope4Options = {
		pointA: {x:450,y: 100},
		bodyB: bob4,
		length: 200,
		stiffness: 0.1
	}
	
	rope4 = Constraint.create(rope4Options);
	World.add(world,rope4);

	var rope5Options = {
		pointA: {x:500,y: 100},
		bodyB: bob5,
		length: 200,
		stiffness: 0.1
	}
	
	rope5 = Constraint.create(rope5Options);
	World.add(world,rope5);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  fill("white");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x, bob1.position.y,50,50);
  ellipse(bob2.position.x, bob2.position.y,50,50);
  ellipse(bob3.position.x, bob3.position.y,50,50);
  ellipse(bob4.position.x, bob4.position.y,50,50);
  ellipse(bob5.position.x, bob5.position.y,50,50);
  line(rope1.pointA.x, rope1.pointA.y,bob1.position.x, bob1.position.y);
  line(rope2.pointA.x, rope2.pointA.y,bob2.position.x, bob2.position.y);
  line(rope3.pointA.x, rope3.pointA.y,bob3.position.x, bob3.position.y);
  line(rope4.pointA.x, rope4.pointA.y,bob4.position.x, bob4.position.y);
  line(rope5.pointA.x, rope5.pointA.y,bob5.position.x, bob5.position.y);

}

function keyPressed() {

	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce(bob1, {x:0, y:0}, {x:-0.1, y:0});
	
	  }

}
