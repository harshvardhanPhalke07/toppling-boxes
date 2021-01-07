const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , GROUND;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(220,300,50,50);
    box2 = new Box (200,200,30,30);
    GROUND= new ground (300,350,400,10)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    GROUND.display();
}