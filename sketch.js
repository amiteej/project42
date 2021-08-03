var iss, spacecraft, hasDocked = false;
var spacecraftimg
var issimg;
var backgroungimg;
function preload() {
  spacecraftimg = loadImage("spacecraft1.png")
  spacecraft2img = loadImage("spacecraft2.png")
  spacecraft3img = loadImage("spacecraft3.png")
  spacecraft4img = loadImage("spacecraft4.png")

  issimg = loadImage("iss.png");
  backgroungimg = loadImage("istockphoto-501655522-170667a.jpeg");
}


function setup() {
  
  createCanvas(1600, 800);

  spacecraft = createSprite(650, 700, 50, 50);
  spacecraft.scale = 0.5;

  iss = createSprite(700, 400,50,50);
  iss.addImage(issimg);
 
}

function draw() {
  background(backgroungimg);


  spacecraft.addImage(spacecraftimg);
  if (!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1, 1);

    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(spacecraft2img);

    }

    if (keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft3img);
      spacecraft.x = spacecraft.x - 1;
    }

    if (keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft4img);
      spacecraft.x = spacecraft.x + 1;
    }

    if (keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraftimg);
    }
  }
  if (spacecraft.y <= (iss.y + 100) && spacecraft.x <= (iss.x - 10)) {
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  

  }
  drawSprites();
}