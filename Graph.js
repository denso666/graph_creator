class Node {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 50, 50);

    textSize(32);
    fill(0);

    if (this.id > 9) {
      text(this.id, this.x - 20, this.y + 10);
    }
    else {
      text(this.id, this.x - 9, this.y + 10);
    }
  }
}

class Link {
  constructor(x_origin, y_origin, x_destiny, y_destiny) {
    this.x_origin = x_origin;
    this.y_origin = y_origin;
    this.x_destiny = x_destiny;
    this.y_destiny = y_destiny;
  }

  display() {
    stroke('red');
    strokeWeight(4);
    line(this.x_origin, this.y_origin, this.x_destiny, this.y_destiny);

    noStroke();
    textSize(25);
    fill(255);
    text(1, (this.x_destiny + this.x_origin) / 2, (this.y_destiny + this.y_origin) / 2);
  }

}
