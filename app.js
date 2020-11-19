let nodes = [];
let links = [];
let cnv;
let ids = 1;

let node_1 = [];
let node_2 = [];

function setup() {
    createCanvas(displayWidth-18,displayHeight-180);
}

function draw() {
    background(0);
  
    //draw links
    for (let i = 0;i<links.length;i++) {
        links[i].display();
    }

    //draw nodes
    for(let i = 0;i<nodes.length;i++) {
        nodes[i].display();
    }

    create_link();
}

function mouseClicked() {
    if (nodes.length) {
        let valid = true;

        //valid distance to create new node
        for (let i = 0;i < nodes.length;i++) {
            let d = dist(nodes[i].x, nodes[i].y, mouseX, mouseY);
            if ( d < 100 )
                valid = false;
        }
        if (valid) {
            nodes.push(new Node(mouseX, mouseY, ids));
            ids++;
        }
    }
    else {
        nodes.push(new Node(mouseX, mouseY, ids));
        ids++
    }
}

function create_link() {
  if (mouseButton == CENTER) {

    if (!node_1.length) {
      for (var i = 0; i < nodes.length; i++) {
        let d = dist(nodes[i].x,nodes[i].y, mouseX, mouseY);
        if (d < 50) {
          node_1.push(nodes[i].x);
          node_1.push(nodes[i].y);
        }
      }
    }
    else {
      for (var i = 0; i < nodes.length; i++) {
        let d = dist(nodes[i].x,nodes[i].y, mouseX, mouseY);
        if (d < 50) {
          node_2.push(nodes[i].x);
          node_2.push(nodes[i].y);
        }
      }
    }

    if (node_1.length && node_2.length) {
      links.push(new Link(node_1[0],node_1[1],node_2[0],node_2[1]));

      node_1 = [];
      node_2 = [];
    }

    mouseButton = undefined;
  }
}
