'use strict'
//write your code here

class LinkedList {
  constructor(lister) {
    this.lister = lister
  }
  getLength() {
    return this.lister.length
  }
  getHead() {
    return this.lister[0]
  }
  getTail() {
    return this.lister[this.lister.length-1]
  }
  push(x) {
    this.lister.push(x)
  }
  pop() {
    this.lister.pop()
  }
}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
list.push(11);
list.pop();
