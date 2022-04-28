function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    background(0);
  
    // helper for writing color to array
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 4;
      image.pixels[index] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    // this function draws random squares within squares on the canvas
    function drawShapes(number1, number2, scal) {
      fill(random(255), random(255), random(255));
      rect(number1, number2, 120*scal, 60*scal);
      fill(random(255), random(255), random(255));
      textSize(50*scal);
      text("NFT", number1+5*scal, number2+50*scal);
    }
  
    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = random(random(255)+random(100));
        let green = random(random(255)+random(100));
        let blue = random(random(255)+random(50));
        let alpha = 255;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
      y--;
    }

    img.updatePixels();
    image(img, 0, 0);
  
    // draw shapes
    for (var i = 0; i < 50; i++) {
      drawShapes(floor(random(width)), floor(random(height+200)), random(1));
    }
  
fill(255);
rect(5, 20, 320, 125);

fill(random(255), random(255), random(255));
rect(20, 50, 10, 50);
fill(random(255), random(255), random(255));
rect(10, 40, 30, 10);

fill(random(255), random(255), random(255));
rect(50, 50, 10, 50);
fill(random(255), random(255), random(255));
rect(70, 50, 10, 50);
fill(random(255), random(255), random(255));
rect(50, 70, 30, 10);

fill(random(255), random(255), random(255));
rect(90, 50, 10, 50);

fill(random(255), random(255), random(255));
rect(110, 50, 10, 30);
fill(random(255), random(255), random(255));
rect(110, 50, 30, 10);
fill(random(255), random(255), random(255));
rect(110, 70, 30, 10);
fill(random(255), random(255), random(255));
rect(130, 70, 10, 30);
fill(random(255), random(255), random(255));
rect(110, 90, 30, 10);

fill(random(255), random(255), random(255));
rect(180, 50, 10, 50);

fill(random(255), random(255), random(255));
rect(200, 50, 10, 30);
fill(random(255), random(255), random(255));
rect(200, 50, 30, 10);
fill(random(255), random(255), random(255));
rect(200, 70, 30, 10);
fill(random(255), random(255), random(255));
rect(220, 70, 10, 30);
fill(random(255), random(255), random(255));
rect(200, 90, 30, 10);

fill(random(255), random(255), random(255));
rect(270, 50, 10, 50);
fill(random(255), random(255), random(255));
rect(290, 50, 10, 50);
fill(random(255), random(255), random(255));
rect(270, 50, 30, 10);
fill(random(255), random(255), random(255));
rect(270, 70, 30, 10);

fill(random(255), random(255), random(255));
rect(15, 110, 300, 5);

fill(255);
rect(700, 550, 60, 40);

fill(0);
rect(705, 555, 5, 25);
rect(705, 555, 10, 5);
rect(715, 555, 5, 15);
rect(725, 555, 5, 25);
rect(720, 555, 10, 5);

rect(735, 555, 5, 25);
rect(745, 555, 5, 10);
rect(745, 570, 5, 10);
rect(735, 565, 10, 5);
}

