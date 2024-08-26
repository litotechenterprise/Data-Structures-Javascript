export default class Stack {
  stack: any[];

  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(item: any) {
    this.stack.push(item);
    return;
  }

  pop(): any | null {
    return this.stack.pop();
  }
}
