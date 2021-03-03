var balloon,bg,balloonL2,balloonL1,balloonL3,balloonX

function preload(){
  bg = loadImage("images/Hot Air Ballon-01.png");
  balloonL1 = loadImage("images/Hot Air Ballon-02.png");
  balloonL2 = loadImage("images/Hot Air Ballon-03.png");
  balloonL3 = loadImage("images/Hot Air Ballon-04.png");
}

function setup() {
  var canvas = createCanvas(500,500);
  balloon = createSprite(200,200);
  balloon.addAnimation("balloon",balloonL1,balloonL2,balloonL3);
  balloon.scale = 0.5;
}

function draw() {
  background(bg);  
  getBalloonX();
  balloonXRef.update();
  if(keyDown(LEFT_ARROW)){
    balloon.x += -10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x += 10;
  }
  if(keyDown(UP_ARROW)){
    balloon.y += -10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y += 10;
  }
  drawSprites();
}

function getBalloonX(){
  var balloonXRef = database.ref('x');
  balloonXRef.on("value",(data)=>{
    balloonXRef = data.val();
  })
}

function update(balloonX){
  database.ref('/').update({
    balloonXRef: balloonX
  });
}