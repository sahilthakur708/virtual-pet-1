const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
 
var particles = [];
var plinkos = [];
var divisions=[];

var count=0
var divisionHeight=300;
var score =0;
var gameState="PLAY"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
line1=createSprite(400,480,800,5)
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("yellow");
 
  Engine.update(engine);

  textSize(30)
  text("Score  "+score,20,30);
  text("500",420,700)
  text("400",500,700)
  text("300",580,700)
  text("200",330,700)
  text("100",250,700)
  text("600",170,700)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(gameState==="END"){
    push()
    textSize(100)
    text("GAME OVER",100,300)
    pop()
   }
   drawSprites()
  
}
function keyPressed(){
  if(gameState==="PLAY"&&keyCode===32){
   count++
   
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      
        score++
      
 

    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
   
 
    if(count>=5){
      gameState="END"
     
    }
  }
  
}

