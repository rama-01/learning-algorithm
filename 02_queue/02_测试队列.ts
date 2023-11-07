import ArrayQueue from './01_实现队列结构'

const queue = new ArrayQueue<string>()

queue.enqueue('hello')
queue.enqueue('world')
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek());