function setup() {
  // Create a drawing area that fills the window
  createCanvas(windowWidth, windowHeight);
  background(220); // Light gray background
}

function draw() {
  // Try commenting out the line below to see a "trail"!
  background(220); 
  
  // Draw a circle at the mouse position
  fill(255, 0, 100); // Pinkish-red color
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}