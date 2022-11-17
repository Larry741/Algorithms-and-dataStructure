class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
} 

export default class DoublyLinkedList {

  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val)

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = poppedNode.prev;
      prevNode.next = null;
      poppedNode.prev = null;
      this.tail = prevNode;
    }
    this.length--;

    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null
      oldHead.next = null;
    }
    this.length--;

    return oldHead
  }
  unShift(val) {
    if (this.length === 0) return this.push(val);
    
    const newNode = new Node(val);
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    oldHead.prev = this.head;
    this.length++;
    return this;
  }
  get(idx) {
    if (this.length === 0 || idx > this.length - 1) return undefined;
    let currentNode;
    if (idx < this.length / 2) {
      let node = this.head;
      for (let i = 0; i <= idx; i++) {
        currentNode = node;
        node = node.next;
      }
    } else {
      let node = this.tail;
      for (let i = this.length - 1; i >= idx; i--) {
        currentNode = node;
        node = node.prev;
      }
    }
    return currentNode;
  }
  set(idx, val) {
    const foundNode = this.get(idx);

    if (!foundNode) return false

    foundNode.val =  val;
    return true;
  }
  insert(idx, val) {
    const currentNode = this.get(idx);
    if (!currentNode) return false;
    if (idx === 0) return !!this.unShift(val);
    if (idx === this.length) return !!this.push(val)
    
    const newNode = new Node(val);
    const prevNode = currentNode.prev
    newNode.next = currentNode;
    currentNode.prev = newNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    this.length++

    return true
  }
  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx);
    if (!removedNode) return false;

    const prevNode = removedNode.prev;
    const nextNode = removedNode.next
    
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--

    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.push(70);
list.push(80);
list.push(90);
list.push(100);

// list.pop();
// list.shift();
// list.unShift(0)
// console.log(list.get(1))
// list.set(0, 100)
// list.insert(20, 100);
// list.remove(4);
console.log(list);