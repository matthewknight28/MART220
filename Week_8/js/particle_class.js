class Particle {

    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.vx = random(-0.5, 0.5);
      this.vy = random(-0.5, 0.5);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(100, this.alpha);
      ellipse(this.x, this.y, 5);
    }
  
  }