/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {
 const newNode = new Node(val);

 if (this.head === null & this.tail === null) {
   this.head = newNode;
   this.tail = newNode;
 } else {
   this.tail.next = newNode;
   newNode.prev = this.tail;
   this.tail = newNode;
 }
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {
  if(!this.head) return; 
  if(this.head.val === val) {
    const newHead = this.head.next;
    newHead.prev = null;
    this.head.next = null;
    this.head = newHead; 
    return; 
  }
  let root = this.head;
  while(root.val !== val) root = root.next;
  root.prev.next = root.next; 
  if(root.next) root.next.prev = root.prev; // removed node is not the tail
  else this.tail = root.prev; // removed node is the tail
  root.next = null;
  root.prev = null;
  return; 
};

module.exports = { DoublyLinkedList, Node };