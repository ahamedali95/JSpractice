// Stack is a linear data structure which follows a particular order in which the
// operations are performed. The order may be LIFO(Last In First Out) or
// FILO(First In Last Out).
//
// Mainly the following three basic operations are performed in the stack:
//
// 1. Push: Adds an item in the stack. If the stack is full, then it is said to be an
// Overflow condition.
// 2. Pop: Removes an item from the stack. The items are popped in the reversed order
// in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
// 3. Peek or Top: Returns top element of stack.
// 4. isEmpty: Returns true if stack is empty, else false.

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(value) {
    this.stack.push(value);
    this.size++;
  }

  pop() {
    if(this.size) {
      this.size--;
      return this.stack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return !this.size
  }
}
