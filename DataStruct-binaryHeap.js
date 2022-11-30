class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    if (!this.values.length) return this.values.push(value);

    this.values.push(value);
    let childIndex = this.values.length - 1;

    while (childIndex) {
      let parentIndex = Math.floor((childIndex - 1) / 2);

      if (this.values[childIndex] > this.values[parentIndex]) {
        this.values[childIndex] = this.values[parentIndex];
        this.values[parentIndex] = value;
      } else break;

      childIndex = parentIndex;
    }

    return this.values;
  }

  extractMax() {
    if (!this.values.length) return null;

    let maxValue = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let parentIndex = 0;
    let leftChildIndex;
    let rightChildIndex;

    while (true) {
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
      let bubbleValue = this.values[parentIndex];
      let swap = null;

      if (leftChildIndex < this.values.length) {
        if (this.values[leftChildIndex] > bubbleValue) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < this.values.length) {
        if (
          (swap === null && this.values[rightChildIndex] > bubbleValue) ||
          (swap && this.values[rightChildIndex] > this.values[leftChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[parentIndex] = this.values[swap];
      this.values[swap] = bubbleValue;
      parentIndex = swap;
    }

    return maxValue;
  }
}
// const heap = new BinaryHeap();

// heap.insert(10);
// heap.insert(30);
// heap.insert(90);
// heap.insert(50);
// heap.insert(20);

// console.log(heap.extractMax());
// console.log(heap.values);

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enQueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);
    let childIdx = this.values.length - 1;

    while (childIdx) {
      let parentIdx = Math.floor(childIdx - 1 / 2);
      let parentNode = this.values[parentIdx];

      if (this.values[childIdx].priority < this.values[parentIdx].priority) {
        this.values[parentIdx] = this.values[childIdx];
        this.values[childIdx] = parentNode;
      } else break;

      childIdx = parentIdx;
    }

    return this.values;
  }

  deQueue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) {
      return null
    }
    this.values[0] = end;

    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }

    return min;
  }
}

const Er = new PriorityQueue();

Er.enQueue("cold", 5);
Er.enQueue("tetanus", 4);
Er.enQueue("muscle pull", 5);
Er.enQueue("gun shot", 1);
Er.enQueue("cancer", 1);
Er.enQueue("appendix", 2);
Er.enQueue("hearth attack", 2);
Er.enQueue("broken bone", 3);

console.log(Er.deQueue())
console.log(Er.deQueue());
console.log(Er.deQueue());
console.log(Er.deQueue());
console.log(Er.deQueue());
// console.log(Er.deQueue());
console.log(Er);
