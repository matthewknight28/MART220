class Particle {

    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.vx = random(-0.25, 0.25);
      this.vy = random(-0.25, 0.25);
      this.alpha = random(0, 255);
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
      this.beta -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(100, this.alpha);
      ellipse(this.x, this.y, 5);
    }
  
  }