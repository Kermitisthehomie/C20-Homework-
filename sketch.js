var path,boy,cash,diamonds,jewelry,sword,obstacle1,obstacle2,obstacle3;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,obstacle1Img,obstacle2Img,obstacle3Img;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup,obstacle1Group,obstacle2Group,obstacle3Group;

//Game States
var PLAY=1;
var End=0;
var gameState=1;
var edges

function preload(){
 obstacle1Img = loadImage("obstacle1.png")  
 obstacle2Img = loadImage("obstacle2.png")
 obstacle3Img = loadImage("obstacle3.png")
 gameOverImg = loadImage("gameOver.png")
 pathImg = loadImage("Road.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 cashImg = loadImage("cash.png");
 diamondsImg = loadImage("diamonds.png");
 jewelryImg = loadImage("jwell.png");
 swordImg = loadImage("sword.png");


}

function setup() {
 
    createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

edges= createEdgeSprites();

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
obstacle1Group=new Group();
obstacle2Group=new Group();
obstacle3Group=new Group();


}

    function draw() {
if(gameState===PLAY){

    background(0); boy.x = World.mouseX;
      
 

        boy.collide(edges);
 
    //code to reset the background
  if(path.y > 400 )  {
    path.y = height/2;
 }
     
          createCash();
          createDiamonds();
          createjewelry();
          createSword();
          createobstacle1();
          createobstacle2();
          createobstacle3();


          if (cashG.isTouching(boy)) {
            cashG.destroyEach();
            treasureCollection=treasureCollection+50;
          }
          else if (diamondsG.isTouching(boy)) {
            diamondsG.destroyEach();
            treasureCollection=treasureCollection+100;
            
          }else if(jewelryG.isTouching(boy)) {
            jewelryG.destroyEach();
      
             treasureCollection=+ 150;
            // treasureCollection= 150;
            // treasureCollection= treasureCollection - 150;
            // treasureCollection= treasureCollection + 150;
           
    if(swordGroup.isTouching(boy)) {
      gameState=End;
    } 
    if(obstacle1Group.isTouching(boy)) {
        gameState=End;
    }
    if(obstacle2Group.isTouching(boy)) {
        gameState=End
    }
    if(obstacle3Group.isTouching(boy)) {
        gameState=End
    }
        // boy.addAnimation(endImg);
        boy.addAnimation("SahilRunning",endImg);
        // boy.addAnimation("SahilRunning");
        // boy.addAnimation(SahilRunning,endImg);

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
         cashG.destroyEach();
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;
        // obstacleGroup1.destroyEach;
        // obstacleGroup2.destroyEach;
        // obstacleGroup3.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        // obstacleGroup1.destroyEach;
        // obstacleGroup2.destroyEach;
        // obstacleGroup3.destroyEach;

        // cashG.destroyEach();
         diamondsG.destroyEach();
        // jewelryG.destroyEach();
        // swordGroup.destroyEach();
        // obstacleGroup1.destroyEach;
        // obstacleGroup2.destroyEach;
        // obstacleGroup3.destroyEach;

        // cashG.destroyEach();
        // diamondsG.destroyEach();
        jewelryG.destroyEach();
        // swordGroup.destroyEach();
        // obstacleGroup1.destroyEach;
        // obstacleGroup2.destroyEach;
        // obstacleGroup3.destroyEach;

        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        obstacle1Group.setVelocityYEach(0);
        obstacle2Group.setVelocityYEach(0);
        obstacle3Group.setVelocityYEach(0);

    }
}

drawSprites();
textSize(20);
fill(255);
text("Treasure: "+ treasureCollection,10,30);
}



function createCash() {
if (World.frameCount % 200 == 0) {
var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
cash.addImage(cashImg);
cash.scale=0.12;
cash.velocityY = 3;
cash.lifetime = 150;
cashG.add(cash);
}
}

function createDiamonds() {
if (World.frameCount % 320 == 0) {
var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
diamonds.addImage(diamondsImg);
diamonds.scale=0.03;
diamonds.velocityY = 3;
diamonds.lifetime = 150;
diamondsG.add(diamonds);
}
}

function createjewelry() {
if (World.frameCount % 410 == 0) {
var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
jewelry.addImage(jewelryImg);
jewelry.scale=0.13;
jewelry.velocityY = 3;
jewelry.lifetime = 150;
jewelryG.add(jewelry);
}
}

function createSword(){
    if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
    }
  }

function createobstacle1(){
    if (World.frameCount % 410 == 0) {
    var obstacle1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    obstacle1.addImage(obstacle1Img);
    obstacle1.scale=0.1;
    obstacle1.velocityY =3;
    obstacle1.lifetime = 150;
    obstacle1Group.add(obstacle1);

    }
}

function createobstacle2(){
    if (World.frameCount % 320 == 0) {
    var obstacle2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    obstacle2.addImage(obstacle2Img);
    obstacle2.scale=0.1;
    obstacle2.velocityY =3;
    obstacle2.lifetime = 150;
    obstacle2Group.add(obstacle2);

    }
}

function createobstacle3(){
    if (World.frameCount % 200 == 0) {
    var obstacle3 = createSprite(Math.round(random(50, 350),40, 10, 10));
    obstacle3.addImage(obstacle3Img);
    obstacle3.scale=0.1;
    obstacle3.velocityY =3;
    obstacle3.lifetime = 150;
    obstacle3Group.add(obstacle3);

    }
}


