const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
    this.bool = false;
    this.findValue = null;
  }


  Node = class {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  root() {
    if (this.rootElement) {
      return this.rootElement.value
    }
    return this.rootElement
  }

  add(value) {
    const newNode = new this.Node(value);
    if (!this.rootElement) {
      this.rootElement = newNode;
      return
    }

    let currentNode = this.rootElement;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
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
      return
    }
    if (hasValue == node.value) {
      return this.bool = true;
    }

    this.has(hasValue, node.left)
    this.has(hasValue, node.right)
    return this.bool;

  }

  find(value, node = this.rootElement) {
    if (!node) {
      return
    }
    if (value == node.value) {
      return this.findValue = node.value;
    }

    this.find(value, node.left)
    this.find(value, node.right)
    return this.findValue;
  }

  remove(/* data */) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};