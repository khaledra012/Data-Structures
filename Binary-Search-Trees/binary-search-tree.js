class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === val) return this;

      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (current.value === val) return true;

      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      data.push(node.value);

      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

tree.find(11);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
