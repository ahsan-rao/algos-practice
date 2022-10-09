/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

function Stack() {
    this.stack = [];
    this.length = 0;

this.push = (value) => {
    this.stack[this.length] = value;
    return ++this.length;
}

this.pop = () => {
    const removed = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length --;
    return removed;
}
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack)

function Queue() {
//stack 1 will be inbound
//stack 2 will be outbound
//enqueue: push new element into stack 1
//dequeue: if stack 2 is empty, pop each element from stack 1 and refill stack 2
//         pop and return element top element from stack 2
this.stack1 = new Stack();
this.stack2 = new Stack();

this.enqueue = (value) => {
    while (this.stack2.length > 0){
        this.stack1.push(this.stack2.pop())
    }
    this.stack1.push(value);
    return ++this.length;
}
this.dequeue = () => {
    while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop());
    }
    const removed = this.stack2.pop()
    this.length--;
    return removed;
}
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log(myQueue);
myQueue.enqueue(2);
console.log(myQueue);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();;
console.log(myQueue);
myQueue.enqueue(4);
console.log(myQueue);

module.exports = { Stack, Queue };
