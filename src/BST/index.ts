export class BinaryNode {
  data: any;
  left: BinaryNode | null;
  right: BinaryNode | null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  root: BinaryNode | null;

  constructor(data: any) {
    this.root = new BinaryNode(data);
  }

  insert(data: any): BinarySearchTree {
    let node = new BinaryNode(data);

    // First insert becomes root
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (data < currentNode.data) {
        // Insert the node if you reach a leaf and return
        if (currentNode.left === null) {
          currentNode.left = node;
          return this;
        }
        // Continue by traversing left
        currentNode = currentNode.left;
      } else {
        // Insert the node if you reach a left and return
        if (currentNode.right === null) {
          currentNode.right = node;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  search(data: number): BinaryNode | null {
    if (!this.root) {
      return null;
    }

    let current_node = this.root as BinaryNode | null;

    while (current_node) {
      if (data < current_node.data) {
        current_node = current_node.left;
      } else if (data > current_node.data) {
        current_node = current_node.right;
      } else if (current_node.data === data) {
        return current_node;
      }
    }

    return null;
  }
}
