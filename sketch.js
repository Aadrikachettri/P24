const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new hammer(10,100);
    stone = new Stone(20,150);
    iron = new Iron(50,350);
    Rubber = new rubber (30,20)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    hammer.fill("orange")
    Stone.fill("green")
    rubber.fill("darkblue")
    plane.display();
    hammer.display();
    Stone.display();
    Iron.display();
    rubber.display();
 
}