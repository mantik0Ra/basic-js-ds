const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    if (!this.head) {
      return null
    }
    return this.head
  }

  enqueue(value) {
    if (!this.head) {
      return this.head = new ListNode(value);
    }
    let currentTarget = this.head;
    while (currentTarget) {
      if (currentTarget.next == null) {
        return currentTarget.next = new ListNode(value);
      }
      currentTarget = currentTarget.next;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    let head = this.head.value;
    this.head = this.head.next;
    return head
  }
}

module.exports = {
  Queue
};
