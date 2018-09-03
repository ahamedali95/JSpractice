// A binary search tree is a tree in which all the nodes follow the following properties:
// 1. The left sub-tree of a node has a key less than or equal to its parent node's key.
// 2. The right sub-tree of a node has a key greater than to its parent node's key.

// Thus, BST divides all its subtrees in to two segments; the left sub-tree and the
// right sub-tree and can be defined as -
//
// left_subtree (keys) ≤  node (key)  ≤  right_subtree (keys)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(node) {
    if(node.value < this.value) {
      if(!this.left) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if(node.value > this.value){
      if(!this.right) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }

  visit() {
    if(this.left) this.left.visit();
    console.log(this.value);
    if(this.right) this.left.visit();
  }

  search(key) {
    if(key === this.value) {
      return "Found!";
    } else if(key < this.value && !this.left) {
      search(key);
    } else if(key > this.value && !this.right) {
      search(key);
    }

    return null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const newNode = new Node(value);

    if(!this.root) {
      this.root = newNode;
    } else {
      this.root.addNode(newNode);
    }
  }

  traverse() {
    this.root.visit();
  }

  search(key) {
    return this.root.search(key);
  }
}
