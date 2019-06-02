class MyNode {
  constructor(data, next = null, prev = null) {
      this.data = data;
      this.next = next;
      this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAtHead(data) {
    let node = new MyNode(data, this.head, null);
    if (this.head) {
        this.head.prev = node;
    } else {
        this.tail = node;
    }
    this.head = node;
}

  addAtEnd(data) {
      let node = new MyNode(data, null, this.tail);
      if (this.tail) {
          this.tail.next = node;
      } else {
          this.head = node;
      }
      this.tail = node;
  }

  printNodeValueFromEnd(index=0) {
    let currentNode = this.tail;
    let currentIndex = 0;
    while (currentNode) {
        if (index === currentIndex) {
            console.log(`Target Node Value is: ${currentNode.data}`);
            break;
        }
        currentIndex ++;
        currentNode = currentNode.prev;
    }
  }

  printNodeValueFromHead(index=0) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
        if (index === currentIndex) {
            console.log(`Target Node Value is: ${currentNode.data}`);
            break;
        }
        currentIndex ++;
        currentNode = currentNode.next;
    }
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    while(currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`Current Value is: ${currentNode.data}`);
      currentNode = currentNode.next;
    }
  }
}

const myLL = new LinkedList();

myLL.addAtEnd(3);
myLL.addAtEnd(4);
myLL.addAtEnd(6);
myLL.addAtEnd(1);
myLL.addAtEnd(7);
// myLL.addAtHead(1);
// myLL.addAtHead(2);
// myLL.addAtHead(5);
//myLL.printNodeValueFromEnd(2);
myLL.reverse();
myLL.print();