interface HashTable {
  [key: number]: any;
}

export default class DynamicArray {
  length: number;
  data: HashTable;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): any {
    return this.data[index];
  }

  push(item: any) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop(): any {
    if (this.length === 0) {
      return undefined;
    }

    const poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return poppedItem;
  }

  insert(index: number, item: any): HashTable | undefined {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    this.length += 1;

    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;
    return this.data;
  }

  remove(index: number): any {
    if (this.length === 0) {
      return undefined;
    }

    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    const itemToBeRemoved = this.data[index];

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length -= 1;
    return itemToBeRemoved;
  }
}
