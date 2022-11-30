

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      return (this.root = newNode);
    }

    let isInserted = false;
    let currentNode = this.root;

    while (!isInserted) {
      if (val > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          ++this.length;
          isInserted = true;
        } else {
          currentNode = currentNode.right;
        }
      } else if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          ++this.length;
          isInserted = true;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val === currentNode.value) {
        isInserted = true;
      }
    }

    return this.root;
  }

  find(val) {
    if (!this.root) return null;

    let currentNode = this.root;

    while (true) {
      if (val > currentNode.value) {
        if (!currentNode.right) {
          return (currentNode = null);
        }
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        if (!currentNode.left) {
          return (currentNode = null);
        }
        currentNode = currentNode.left;
      } else if (val === currentNode.value) {
        return currentNode;
      }
    }
  }

  // Searches though the width of the tree
  // And is has a bad space complexity compared to DFS
  BFS() {
    if (!this.root) return null;

    const data = [];
    const queue = [];
    let node;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Searches into the depth of the tree
  // returns the tree in place, so it can be recreated
  DFSPreOrder() {
    if (!this.root) return null;

    const data = [];

    const iterate = (node) => {
      data.push(node.value);

      if (node.left) iterate(node.left);
      if (node.right) iterate(node.right);
    };

    iterate(this.root);

    return data;
  }

  // Searches into the depth of the tree
  DFSPostOrder() {
    if (!this.root) return null;

    const data = [];

    const iterate = (node) => {
      if (node.left) iterate(node.left);
      if (node.right) iterate(node.right);

      data.push(node.value);
    };

    iterate(this.root);

    return data;
  }

  // Searches into the depth of the tree
  // returns the tree from the lowest to the highest
  DFSInOrder() {
    if (!this.root) return null;

    const data = [];

    const iterate = (node) => {
      if (node.left) iterate(node.left);
      data.push(node.value);
      if (node.right) iterate(node.right);
    };

    iterate(this.root);

    return data;
  }
}

const tree = new Bst();

tree.insert(60);
tree.insert(30);
tree.insert(10);
tree.insert(100);
tree.insert(25);
tree.insert(39);
tree.insert(63);
tree.insert(125);

// console.log(tree.find(20));
// console.log(tree.DFSPreOrder());
// console.group(tree.DFSPostOrder());
console.log(tree.DFSInOrder());