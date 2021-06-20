var fox,foxImage
var foodImage,food1,food2,food3,food4,food5,food6;
var grenadeImg,grenade1,grenade2;
var mazeImg,wall1,wall2,wall3,wall4,wall5,
    wall6,wall7,wall8,wall9,wall10,
    wall11,wall12,wall13,wall14,wall15;

function preload(){
   mazeImg = loadImage("maze.png");
   foxImage = loadImage("Fox.png");
}

function setup(){
  createCanvas(500,500);
console.log();
  fox = createSprite(270,450,25,25);
  fox.addImage(foxImage);
  fox.scale = 0.2;

  wall1 = createSprite(46,250,10,400);
  wall2 = createSprite(454,250,10,400);
  wall3 = createSprite(127,46,173,10);
  wall4 = createSprite(352,46,215,10);
  wall5 = createSprite(127,46,173,10);
  wall6 = createSprite(144,454,208,10);
  wall7 = createSprite(372,454,173,10);
  wall8 = createSprite(210,250,10,170);
  wall9 = createSprite(250,310,10,215);
  wall10= createSprite(290,350,10,50);
  wall11= createSprite(310,330,130,10);
  wall12= createSprite(399,250,120,10);
  wall13= createSprite(128,230,10,137);
  wall14= createSprite(128,292,95,10);
  wall15= createSprite(165,330,90,10);
  wall16= createSprite(170,250,90,10);
  wall17= createSprite(87,169,10,174);
  wall18= createSprite(131,370,10,86);
  wall19= createSprite(169,413,90,10);
  wall20= createSprite(210,374,85,10);
  wall21= createSprite(146,126,130,10);
  wall22= createSprite(168,146,10,129);
  wall23= createSprite(289,65,10,45);
  wall24= createSprite(227,166,50,10);
  wall25= createSprite(329,167,90,10);
  wall26= createSprite(290,208,10,90);
  wall27= createSprite(270,208,30,10);
  wall28= createSprite(248,144,10,40);
  wall29= createSprite(290,125,95,10);
  wall30= createSprite(333,100,10,40);
  wall31= createSprite(332,247,10,90);
  wall32= createSprite(310,287,40,10);
  wall33= createSprite(372,67,10,40);
  wall34= createSprite(413,100,10,50);
  wall35= createSprite(208,428,10,40);
  wall36= createSprite(290,410,90,10);
  wall37= createSprite(371,302,10,50);
  wall38= createSprite(330,386,10,50);
  wall39= createSprite(367,368,75,10);
  wall40= createSprite(410,338,10,150);
  wall41= createSprite(371,144,10,50);
  wall42= createSprite(390,121,50,10);
  wall43= createSprite(228,81,130,10);
}

function draw(){
    background(mazeImg);
    text(mouseX + "," + mouseY,mouseX,mouseY);

 drawSprites();
}