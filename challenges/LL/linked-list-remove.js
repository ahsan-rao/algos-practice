/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}


const linkedListRemove = (ll, val) => {
  if(!ll.head) return undefined; 
  if(ll.head.val === val) {
    const removed = ll.head; 
    ll.head = ll.head.next;
    return removed; 
  }
  let left = ll.head;
  let right = ll.head.next;
  while(right) {
    if(right.val === val) {
      const removed = right;
      left.next = left.next.next;
      return removed;
    }
    left = right;
    right = right.next; 
  }
  return undefined;
};


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {
// const returnNodes = [];

// let newHead = ll.head;

// while (newHead.val === val){
//   returnNodes.push(newHead);
//   newHead = ll.head.next;
//   ll.head = ll.head.next;
// }

// let prevNode = newHead;
// let currNode = newHead.next;

// while(currNode.next.next){
//   if (currNode.val === val){
//     returnNodes.push(currNode);
//     prevNode.next = currNode.next;
//   }
//   prevNode = currNode;
//   currNode = currNode.next;
// }

// if (currNode.next.val === val){
//   returnNodes.push(currNode.next);
//   currNode.next = null;
// }

// return returnNodes.length ? returnNodes : undefined;

while(ll.head && ll.head.val === val) {
  ll.head = ll.head.next; 
}
let curr = ll.head;
while(curr && curr.next) {
  if(curr.next.val === val) curr.next = curr.next.next;
  else curr = curr.next; 
}
return ll;

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
