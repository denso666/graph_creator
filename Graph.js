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
		} else {
			text(this.id, this.x - 9, this.y + 10);
		}
	}
}

class Link {
	constructor(x_o, y_o, x_d, y_d) {
		this.x_o = x_o;
		this.y_o = y_o;
		this.x_d = x_d;
		this.y_d = y_d;
		this.weight = 1;
	}

	display() {
		stroke("rgb(131, 0, 0)");
		strokeWeight(4);
		line(this.x_o, this.y_o, this.x_d, this.y_d);

		noStroke();
		textSize(25);
		fill(255);
		text(this.weight,(this.x_d + this.x_o) / 2,(this.y_d + this.y_o) / 2);
	}
}
