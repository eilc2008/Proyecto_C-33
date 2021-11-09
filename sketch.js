/* Carlos quería ir a la feria de cumpleaños de uno de sus amigo, pero no pudo ir.
Para que se sintiera mejor, otro de sus amigos le hizo uno de los juegos de feria que es sobre tirar los objetivos.
Carlos solo tiene 3 intentos para poder obtener todos los puntos*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground,platform;

var gameState = 0;

var score = 0;

var count = 0;

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;


  ball = new Ball(300,300,75,75);

  rope = new Rope(ball.body,{x:300,y:200});


  box1 = new Box(1200,115,50,50);

  box2 = new Box(1175,165,50,50);
  box3 = new Box(1225,165,50,50);

  box4 = new Box(1150,215,50,50);
  box5 = new Box(1200,215,50,50);
  box6 = new Box(1250,215,50,50);

  box7 = new Box(1125,265,50,50);
  box8 = new Box(1175,265,50,50);
  box9 = new Box(1225,265,50,50);
  box10 = new Box(1275,265,50,50);


  ground = new Ground(400,400,800,20);

  platform = new Ground(1200,300,250,20);
}

function draw() {
  background(200,200,200);  
  //drawSprites();
  Engine.update(engine);

  textSize(50);
  fill("orange");
  text("Score: " + score,20,50)

  ground.display();
  platform.display();

  ball.display();
  rope.display();

  fill("red");
  box1.display();
  fill("green")
  box2.display();
  box3.display();
  fill("blue");
  box4.display();
  box5.display();
  box6.display();
  fill("white");
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  if(count >= 3){
    gameState = 2;
  }

  if(score === 1000){
    gameState = 3;
  }

  if(gameState === 2){
    textSize(100);
    fill("red");
    text("GAME OVER", 500,400);
  }

  if(gameState === 3){
    textSize(100);
    fill("cyan");
    text("YOU WIN", 550,400);
  }
}

function mouseDragged(){
  if (gameState === 0){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  if(gameState === 0){
    rope.fly();
    gameState = 1;
  }
}

function keyPressed(){
  if(keyCode === 32 && gameState === 1){
    rope.attach(ball.body);
    Matter.Body.setPosition(ball.body,{x:300,y:300});

    gameState = 0;

    count = count +1;
  }
}