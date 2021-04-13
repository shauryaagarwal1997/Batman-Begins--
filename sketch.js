const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var rainDrops=[];
var x=0;
var y=0;
var drop1;

function setup(){
    createCanvas(600,950);
    engine=Engine.create();
    world=engine.world;
   drop1=new Drops(200,200,3)
        var maxDrops =3000;
        for(var i=0; i<maxDrops; i++){
            rainDrops[i]=new Drops((random(0,600)),random(-10000,950),3);
        }
    
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i=0; i<rainDrops.length; i++){
        rainDrops[i].display();

    }
    drop1.display();

}   

