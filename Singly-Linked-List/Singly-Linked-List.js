// Singly Linked List Implementation in JavaScript

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // Delete from the end
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Delete from the beginning
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;

    this.head = currentHead.next;

    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  // Add to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;

    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let pref = this.get(index - 1);
    let temp = pref.next;

    pref.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let pref = this.get(index - 1);
    let removed = pref.next;
    pref.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }
  reverse() {
    if (!this.head || !this.head.next) return this;
    let node = this.head;
    this.tail = node;

    let next;
    let prev = null;
    while (node !== null) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    this.head = prev;
    return this;
  }
  rotate(k) {
    if (this.length < 2 || k === 0) return this;

    k = k % this.length;
    if (k < 0) k += this.length;

    if (k === 0) return this;

    this.tail.next = this.head;

    let stepsToMove = this.length - k;
    let newTail = this.tail;

    for (let i = 0; i < stepsToMove; i++) {
      newTail = newTail.next;
    }
    this.tail = newTail;
    this.head = newTail.next;
    this.tail.next = null;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("khaled");
list.push("Ramadan");
list.push("Awad");

