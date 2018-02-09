// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null, prev = null) {
        this.next = next;
        this.prev = prev;
        this.data = data;
        this.index = 0;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }
    
    push(data) {
        let node = new Node(data);
        if (!this.head) {
            node.next = null;
            node.index = 0;
            this.tail = this.head = node;
        } else {
            node.index = this.head.index + this.tail.index + 1;
            this.tail.next = node;
            this.tail = node;
        }
    }

    insertFirst(data) {
        let node = new Node(data);
        if (!this.head) {
            node.next = null;
            node.index = 0;
            this.tail = this.head = node;
        } else {
            this.updateIndeces();
            node.next = this.head;
            this.head = node;
        }
    }

    removeAt(index) {
        let currentNode = this.head;
        if (index == 0) {
            this.head = this.tail = null;
            return;
        }
        while (currentNode) {
            if (currentNode.index === index - 1) {
                currentNode
            }
            currentNode = currentNode.next;
        }
    }

    size() {
        let currentNode = this.head;
        let size = 0;
        while (currentNode) {
            ++ currentNode.index;
            currentNode = currentNode.next;
            ++size;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    updateIndeces() {
        let currentNode = this.head;
        while (currentNode) {
            ++ currentNode.index;
            currentNode = currentNode.next;
        }
    }

    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log("Value = " + currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

function test() {
    let list = new LinkedList();
    // list.push(5);
    // list.push(6);
    // list.push(7);
    // list.push(1);
    list.insertFirst(1);
    list.getFirst();
    list.insertFirst(2);
    list.getFirst();
    // list.insertFirst(10);
    list.getFirst();
    console.log(list.size());
    list.print();
}

test();

module.exports = {Node, LinkedList };
