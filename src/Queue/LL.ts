class Node {
  data: any;
  prev: Node | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
  }
}

export default class Queue {
  first: Node | null;
  last: Node | null;
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek(): Node | null {
    return this.first;
  }

  enqueue(item: any): Node {
    const newLastNode = new Node(item);
    const isEmpty = !this.first && !this.last;

    if (isEmpty) {
      this.first = newLastNode;
      this.last = newLastNode;
    }
    if (this.first && this.last) {
      this.last.prev = newLastNode;
      this.last = newLastNode;
    }

    return newLastNode;
  }

  dequeue(): Node | null {
    const removedItem = this.first;

    if (!removedItem) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = removedItem.prev;

    return removedItem;
  }
}
