class Node {
  constructor(val) {
    this.val =  val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first;
    this.last;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;  
    }

    return ++this.length
  }

  pop() {
    if (!this.first) return null;
    
    const removedNode = this.first;
    this.first = this.first.next;
    this.length--
    if (this.length === 0) this.last = null

    return removedNode.val
  }
}

const stack = new Stack();

// console.log(stack.push(10));
// console.log(stack.push(20));
// console.log(stack.push(30));
// console.log(stack.push(40));
// console.log(stack.push(50));

// stack.pop();

// console.log(stack);

class Queue {
  constructor() {
    this.first;
    this.last;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length
  }

  pop() {
    if (!this.first) return null;
    const removedNode = this.first;

    this.first = removedNode.next;
    this.length--
    if (this.length === 0) this.last = null

    return removedNode.val
  }
}

const queue = new Queue();

console.log(queue.push(10));
console.log(queue.push(20));
console.log(queue.push(30));
console.log(queue.push(40));
console.log(queue.push(50));

queue.pop();

console.log(queue);