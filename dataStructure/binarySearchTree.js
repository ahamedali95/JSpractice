class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const node = new Node(value);
    if(!this.root) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(n) {
    console.log(n.value);
    if(n.value < this.value) {
      if(!this.left) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if(n.value > this.value){
        if(!this.right) {
          this.right = n;
        } else {
          this.right.addNode(n);
        }
    }
  }
}
