class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      return ++this.size;
    } else {
      const temp = this.first;

      this.first = node;
      this.first.next = temp;
      return ++this.size;
    }
  }
  pop() {
    if (!this.first) return null;

    if (this.first === this.last) this.last = null;
    const first = this.first;

    this.first = this.first.next;

    this.size--;

    return first;
  }
}
