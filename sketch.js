//name spacing or nick, short NAME
const phyEngine = Matter.Engine;
const phyWorld = Matter.World;
const phyBodies = Matter.Bodies;
 
var myEngine, myWorld;
var ground,ball;  //bodies/objs
//var width = 500;
 
function setup() {
    createCanvas(400,400);
    myEngine = phyEngine.create();
    myWorld = myEngine.world;
 
    //create an option
    //JSON
 
    var ground_options = {
        isStatic: true
    }
 
    ground = phyBodies.rectangle(200,370,500,20, ground_options);
   phyWorld.add(myWorld,ground);

    var ball_options = {
        restitution: 1.0
    }

   ball = phyBodies.circle(190,250,44,ball_options)
   phyWorld.add(myWorld,ball);
}
 
function draw() {
    background(0,0,0);  
 
    rectMode(CENTER);
    rect(200,200,50,50);
 
    rect(ground.position.x,ground.position.y,500,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,24)
 
    //drawSprites();
    phyEngine.update(myEngine);
}
