const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    let root = this.rootElement
    return root
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.rootElement) {
      this.rootElement = newNode;
      return
    }

    let currentNode = this.rootElement;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return
        }

        currentNode = currentNode.right;
      }
    }

  }

  has(hasValue, node = this.rootElement) {
    if (!node) {
      return false;
    }
    if (hasValue == node.data) {
      return true;
    }
    return hasValue > node.data ? this.has(hasValue, node.right)
      : this.has(hasValue, node.left)



  }

  find(value, node = this.rootElement) {
    if (!node) {
      return null
    }
    if (value == node.data) {
      return node;
    }

    return value > node.data ? this.find(value, node.right)
      : this.find(value, node.left)

  }

  remove(value) {
    this.rootElement = removeNode(this.rootElement, value)

    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootElement) {
      return
    }

    let node = this.rootElement;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootElement) {
      return
    }

    let node = this.rootElement;
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};