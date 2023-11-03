import ArrayQueue from './01_实现队列结构'

const queue = new ArrayQueue<string>()

queue.enqueue('hello')
queue.enqueue('world')
queue.dequeue()
queue.size()
queue.peek()
