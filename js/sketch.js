var myCondition = false;
var a = 5;
var b = 10;
var c = 15;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}


function draw() {
    noStroke();
  
  if (mouseX < 200){
    //day
    fill(52, 152, 219)
    rect(0, 0, 400)
    fill("gold")
    ellipse(200, 100, 100)
    fill("white")
    square(100, 100, 55, 20);
  square(100, 35, 80, 20);
  square(75, 55, 70, 20);
  square(95, 20, 60, 20);
  square(55, 95, 60, 20)
 
  square(300, 70, 80, 20);
  square(320, 70, 55, 20);
  square(280, 35, 80, 20);
  square(250, 55, 70, 20);
    
  square(50, 260, 55, 20);
  square(25, 235, 80, 20);
  square(75, 255, 70, 20);
  square(95, 220, 60, 20);
  square(55, 215, 60, 20);
 
  square(300, 250, 80, 20);
  square(320, 270, 55, 20);
  square(280, 235, 80, 20);
  square(250, 255, 70, 20);
  } else if (mouseX >= 200) {
    //night
    fill(21, 67, 96)
    rect(0, 0, 400)
    fill("white")
    ellipse(200, 100, 100)
    fill(213, 216, 220)
    square(100, 100, 55, 20);
  square(100, 35, 80, 20);
  square(75, 55, 70, 20);
  square(95, 20, 60, 20);
  square(55, 95, 60, 20)
 
  square(300, 70, 80, 20);
  square(320, 70, 55, 20);
  square(280, 35, 80, 20);
  square(250, 55, 70, 20);
    
  square(50, 260, 55, 20);
  square(25, 235, 80, 20);
  square(75, 255, 70, 20);
  square(95, 220, 60, 20);
  square(55, 215, 60, 20);
 
  square(300, 250, 80, 20);
  square(320, 270, 55, 20);
  square(280, 235, 80, 20);
  square(250, 255, 70, 20);
    
         rainColor = color(89, 203, 255);
         rainSpeed = 1;
         rainThickness = 1;
 
        
            x = random(width);
            y = random(height);
            length = random(10, 30);
 
            stroke(rainColor);
            strokeWeight(rainThickness);
            line(x, y, x, y + length);
           if (y > height) 
                y = random(-200, -100);
            }
    }