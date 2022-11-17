class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    ++this.length;
    return newNode;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = this.head;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    --this.length;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;

    let removedNode = this.head;
    this.head = this.head.next;
    --this.length;
    if (this.length === 0) {
      this.tail = null;
    }

    return removedNode;
  }

  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1 || typeof idx != "number")
      return undefined;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current;
  }

  set(idx, val) {
    const foundNode =  this.get(idx);

    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length - 1 || typeof idx != "number") return false;
    if (idx === this.length - 1) return !!this.push(val);
    if (idx === 0) return !!this.unShift(val);

    const newnode = new Node(val);
    let prevNode = this.get(idx - 1);
    newnode.next = prevNode.next;
    prevNode.next = newnode;
    this.length++;

    return true
  }

  remove(idx) {
    if (idx < 0 || idx > this.length - 1 || typeof idx != "number") return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const prevNode = this.get(idx - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    let nextNode = this.head.next;
    let tempNode;

    for(let i = 0; i < this.length - 1; i++) {
      if (i === 0) {
        currentNode.next = null;
        this.tail = currentNode;
      }
      tempNode = nextNode.next;

      this.head = nextNode;
      this.head.next = currentNode;
      
      currentNode = nextNode;
      nextNode = tempNode;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

// console.log(list.unShift(10));
// console.log(list.shift());
// console.log(list.pop());
// console.log(list.get(3));
// console.log(list.set(5, 50));
// list.insert(3, 50);
// console.log(list.remove(0));
list.reverse();
console.log(list.head);
console.log(list.head.next.next);