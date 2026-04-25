class Queue extends Array {
  enqueue(elem) {
    super.push(elem);
  }

  dequeue() {
    return super.shift();
  }

  peek() {
    return this[0];
  }

  reverse() {
    throw new Error("reverse is not supported");
  }
}

let q = new Queue(10, 20, 30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.peek());
