// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head  = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let node = this.head;

        while (node) {
            node = node.next;
            size++;
        }

        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (!lastNode) {
            this.head = new Node(data);
            return;
        }
        
        lastNode.next = new Node(data);
    }

    getAt(idx) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === idx) {
                return node;
            }

            counter++;
            node = node.next;
        }
        
        return null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            this.head = this.head.next;
        }

        const previous = this.getAt(idx - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, idx) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (idx === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(idx - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(cb) {
        if (!this.head) {
            return;
        }

        let node = this.head;
        while (node) {
            cb(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node .next;
        }
    }
}

module.exports = { Node, LinkedList };
