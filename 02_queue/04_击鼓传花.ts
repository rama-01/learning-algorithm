import ArrayQueue from './01_实现队列结构'

const hotPotato = (names: string[], num: number) => {
  // 生成一个队列
  const queue = new ArrayQueue<string>()
  // 数据装填入队列
  for (const name of names) {
    queue.enqueue(name)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      queue.enqueue(name!)  //非空断言
    }
    queue.dequeue()
  }
  // 返回最后那个人
  return queue.dequeue()
}

const res = hotPotato(['a', 'b', 'c', 'd'], 3)
console.log(res)
