/**
 * Write a function containsCycle() that takes the first node 
 * in a singly-linked list and returns a boolean indicating 
 * whether the list contains a cycle.
 */

const LinkedListNode = (value) => {
  this.value = value;
  this.next = null;
}

const containsCycle = (head) => {
  let slow = head;
  let fast = head;

  while (slow && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}