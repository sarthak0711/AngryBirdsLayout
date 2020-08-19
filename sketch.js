const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,box3,box4,log2,pig2,box5,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,600,60,60);
    box2 = new Box(700,600,60,60);
    ground = new Ground(500,height,1000,20)
    pig1 = new Pig(600,600)
    log1 = new Log(600,500,260,PI)

    box3 = new Box(500,400,60,60);
    box4 = new Box(700,400,60,60);
    pig2 = new Pig(600,400)
    log2 = new Log(600,300,260,PI)

    box5 = new Box(600,200,60,60);
    log3 = new Log(650,150,100,PI/6)
    log4 = new Log(550,150,100,-PI/6)

    bird = new Bird(200,350)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}