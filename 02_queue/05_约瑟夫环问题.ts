import ArrayQueue from './01_实现队列结构'

const lastRemaining = (n: number, m: number) => {
  // 构造一个队列
  const queue = new ArrayQueue()
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }
  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      const num = queue.dequeue()
      queue.enqueue(num)
    }
    queue.dequeue()
  }
  return queue.dequeue()
}

console.log(lastRemaining(5, 3))
console.log(lastRemaining(10, 17))