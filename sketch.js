function setup() {
  
  createCanvas(800, 600);
  noLoop();
  
}

function draw() {
  //create texture on brown !!!!!!!!!!! 
  background(131, 105, 80); //brown color
  translate(width / 2, height / 2); // Center the drawing

  
  textSize(50);        // Set text size
  textAlign(CENTER);   // Align text to center
  fill(240, 83, 73);       // Text color
  text("Sopes", 0, -260); // Position above the plate
  drawPlate();
}

function drawPlate() {
  let radius = 250;
  
//shadow
  fill('#363636');
  ellipse(0, 0, radius * 2.2);
  // Outer Blue Border
  fill(235);
  strokeWeight(10);
  stroke(0, 0, 150);
  ellipse(0, 0, radius * 2);

  // Green Leaf Border
  drawLeafPattern(radius * 0.9);

  // INNER BLUE CIRCLE
  
  fill('blue');
  ellipse(0, 0, radius * 0.6);
  
  
  
  // Inner ORANGE Circle
  strokeWeight(9);
  stroke(255, 128, 31);
  noFill();
  ellipse(0, 0, radius * 1.5);

  // Floral Center
  drawFlower(radius * 0.5);
}

// Function to draw repeating leaves around the edge
function 
drawLeafPattern(r) { 
  let leafCount = 16;
  for (let i = 0; i < leafCount; i++) {
    let angle = TWO_PI * (i / leafCount);
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    
    //push() and pop() -  saves current drawing state, including rotation and styling, allowing you to apply changes within a specific block of code without affecting the rest of your canvas
    
    push(); 
    //shifts original to diff position
    translate(x, y);
    rotate(angle);
    
    // Green leaf shape to teal 
    fill('#4fb9af');
    stroke(50, 130, 50);
    strokeWeight(2);
    beginShape();
    vertex(30, 0);
    bezierVertex(-10, -15, 10, -15, 10, 0);
    bezierVertex(10, 15, -10, 15, -10, 0);
    endShape(CLOSE);
    
    // Yellow dot
    fill(255, 200, 50);
    noStroke();
    ellipse(0, 10, 8);
    
    pop();
  }
}

// Function to draw central floral pattern
function drawFlower(r) {
  let petalCount = 8;

  for (let i = 0; i < petalCount; i++) {
    let angle = TWO_PI * (i / petalCount);
    let x = cos(angle) * r;
    let y = sin(angle) * r;

    push();
    translate(x, y);
    rotate(angle);

    // Petal shape
    fill(100, 180, 100);
    stroke(0);
    strokeWeight(2);
    beginShape();
    vertex(-10, 0);
    bezierVertex(-10, -20, 10, -20, 10, 0);
    bezierVertex(10, 20, -10, 20, -10, 0);
    endShape(CLOSE);

    // side dots
    fill('#FF4840');
    ellipse(0, -15, 10, 8);
    
    // side dots
    fill('#FF4840');
    ellipse(0, 20, 10, 8);

    pop();
  }

  // Central Yellow Circle
  fill(255, 200, 50);
  stroke(0);
  ellipse(0, 0, r * 0.4);
  
  
  //----------------------  SOPES  ---------------------------------
  //triangle(x1, y1, x2, y2, x3, y3)
// BABY sope
   fill(242, 201, 100)
  strokeWeight(0.7);
  stroke('black')
  //x, y, d
  circle(-65, 97, 120);
  //carne molida
  fill('#43270F')
  circle(-65, 97, 100.5);
  //papas x, y, s
  fill(240,194,132);
  square(-60, 97, 9);
  square(-80, 120, 9);
  square(-100, 97, 9);
  square(-50, 60, 9);
  square(-78, 70, 11);
  //tomato
  fill('red')
  square(-67, 97, 7);
  square(-72, 120, 7);
  square(-90, 97, 7);
  // cheese triangles
  // lettuce rectangles
  noStroke();
  fill('#C8E6CA')
  //xy wh
  rect(-50, 110, 32, 6);
  rect(-90, 100, 24, 7);
  rect(-90, 120, 29, 4);
  rect(-67, 86, 38, 7);
  rect(-81, 90, 27, 8);
// queso fresco
  //x1, y1, x2, y2, x3, y3
  fill('white')
  triangle(-50, 100, -56, 96, -45, 88);
  triangle(-75, 69, -73, 90, -80, 88);
  triangle(-94, 75, -100, 81, -106, 86);
  triangle(-63, 100, -59, 96, -70, 88);
  
  circle(-63, 75, 3.2);
  circle(-80, 130, 6);
  circle(-55, 126, 4.5);
  circle(-90, 89, 4.2);
// big sope 1 upper one
  fill(242, 201, 100)
  stroke('black')
  //x, y, d
  circle(-25, -90, 175);
  //carne molida
  fill('#43270F')
  circle(-25, -90, 140);
  //papas 
  fill(255,194,132);
  square(-25, -90, 12);
  square(0, -60, 12);
  square(-58, -103, 10);
  square(0, -130, 12);
  square(-45, -140, 9);
  square(-48, -45, 11);
  //lettuce rectangles
  //tomato
  fill('red')
  square(-10, -90, 12);
  square(-7, -60, 6);
  square(-49, -103, 10);
  square(-13, -130, 7);
  square(-37, -140, 9);
  square(-49, -45, 11);
  
  noStroke();
  //xy wh
  fill('#C8E6CA')
  rect(-15, -110, 30, 7);
  rect(-36, -98, 30, 6);
  rect(-59, -36, 45, 6);
  rect(-67, -54, 42, 5);
  rect(-77, -70, 44, 5);
  rect(-79, -120, 37, 5)
  rect(-15, -38, 29, 6);
  //queso fresco, triangle (7)
  //x1, y1, x2, y2, x3, y3
  fill('white')
  triangle(-15, -36, -27, -44, -32, -46);
  triangle(-58, -30, -63, -44, -63, -39);
  triangle(-36, -110, -47, -120, - 51, -92);
  triangle(-36, -97, -50, -108, -37, -92);
  triangle(-45, -20, -52, -23, -59, -44);
  triangle(-40, -112, -32, -103, -34, -112);
  // circle x, y, r
  circle(17, -62, 7);
  circle(5, -128, 6.8);
  circle(-67, -97, 7);
  circle (-80, -110, 9);
  circle(0, -54, 5.4);
  circle(-13, -45, 7);
  circle(-34, -57, 8);
  
// big sope 2, bottom right 
  fill(242, 201, 100) //masa
  stroke('black')
  //x, y, w, and h
  circle(95, 78, 190);
  //carne molida
  fill('#43270F')
  circle(95, 78, 160);
  //papas
  fill(255,194,132);
  square(95, 78, 9);
  square(120, 60, 11);
  square(65, 40, 13);
  square(45, 88, 11);
  square(134, 99, 12);
  square(136, 25, 10);
  //tomato
  fill('red')
  square(90, 80, 7);
  square(110, 60, 9);
  square(55, 40, 7);
  square(37, 88, 8);
  square(120, 99, 10);
  square(104, 25, 10);
   //xy wh, lettuce rectangles
  noStroke();
  fill('#C8E6CA')
  rect(134, 78, 37, 6);
  rect(110, 50, 36, 7);
  rect(53, 87, 52, 6);
  rect(47, 54, 42, 6);
  rect(130, 107, 42, 4);
  rect(35, 120, 57, 5);
  //queso fresco, triangle (7)
  //x1, y1, x2, y2, x3, y3
  fill('white')
  triangle(110, 67, 117, 59, 124, 45);
  triangle(67, 87, 74, 56, 56, 69);
  triangle(75, 63, 90, 70, 88, 74);
  triangle(56, 20, 64, 34, 71, 41);
  triangle(34, 35, 46, 22, 37, 27);
  //x, y, r
  circle(34, 63, 4);
  circle(50, 75, 7);
  circle(73, 94, 5);
  circle(50, 75, 7);
  circle(120, 30, 5);
  circle(117, 120, 6);
  circle( 100, 113, 5);
}
