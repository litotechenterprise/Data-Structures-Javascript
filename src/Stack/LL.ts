class Node {
  data: any;
  prev: Node | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
  }
}

export default class Stack {
  last: Node | null;

  constructor() {
    this.last = null;
  }

  peek(): Node | null {
    return this.last;
  }

  push(item: any): Node {
    const prevLast = this.last;

    this.last = new Node(item);
    this.last.prev = prevLast;

    return this.last;
  }

  pop(): Node | null {
    const removedItem = this.last;

    if (removedItem) {
      this.last = removedItem.prev;
    }

    return removedItem;
  }
}
