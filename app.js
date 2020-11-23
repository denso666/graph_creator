//global graph
let nodes = [];
let links = [];

let ids = 0;

let node_1 = [];
let node_2 = [];

//show
let id_node_selected = -1;

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 69);
	//createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	//text to node selected
	noStroke();
	textSize(25);
	fill(255);
	text("Node_selected: "+id_node_selected,10,30);

	//draw links
	for (let i = 0; i < links.length; i++) {
		links[i].display();
	}

	//draw nodes
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].display();
	}

	//create_link();
	//console.log(mouseX, mouseY);
}

function windowResized() {
	resizeCanvas(windowWidth - 20, windowHeight - 69);
}

function doubleClicked() {
	if (mouseX < 263 && mouseY < 64) return;
	
	if (nodes.length) {
		let valid = true;

		//valid distance to create new node
		for (let i = 0; i < nodes.length; i++) {
			let d = dist(nodes[i].x, nodes[i].y, mouseX, mouseY);
			if (d < 100) valid = false;
		}

		if (valid) {
			nodes.push(new Node(mouseX, mouseY, ids));
			ids++;
		}
	} else {
		nodes.push(new Node(mouseX, mouseY, ids));
		ids++;
	}
  	mouseButton = undefined;
}

function mouseClicked() {
	if (mouseButton === LEFT) {
		let found = false;

		//search node
		for (var i = 0; i < nodes.length; i++) {
			let d = dist(nodes[i].x, nodes[i].y, mouseX, mouseY);
			if (d < 25) {
				if (!node_1.length) {
					node_1.push(nodes[i].x);
					node_1.push(nodes[i].y);
					id_node_selected = nodes[i].id;	
				} else {
					node_2.push(nodes[i].x);
					node_2.push(nodes[i].y);
				}
				found = true;
				break;
			}
		}
		
		//select blank space
		if (!found) {
			node_1 = [];
			node_2 = [];
			id_node_selected = -1;
		}

		if (node_1.length && node_2.length) {
			let existing = false;

			//existing link add weight
			for (let i = 0;i<links.length;i++) {
				if (links[i].x_o == node_1[0] && links[i].y_o == node_1[1] &&
					links[i].x_d == node_2[0] && links[i].y_d == node_2[1] ||
					links[i].x_o == node_2[0] && links[i].y_o == node_2[1] &&
					links[i].x_d == node_1[0] && links[i].y_d == node_1[1]) {
					links[i].weight++;
					existing = true;
					break;
				}
			}

			//not existing link
			if (!existing) {
				links.push(new Link(node_1[0],node_1[1],node_2[0],node_2[1]));
			}

			node_1 = [];
			node_2 = [];
			id_node_selected = -1;
		}

		mouseButton = undefined;
	}
}
