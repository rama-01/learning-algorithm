import Heap from '../09_heap/06_min_max_Heap_refactor'

class PriorityNode<T> {
  /* priority: number
  value: T
  constructor(priority: number, value: T) {
    this.priority = priority
    this.value = value
  } */
  // 使用typescript提供的语法糖
  constructor(public priority: number, public value: T) { }
  valueOf() {
    return this.priority
  }
}

class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap([])
  enqueue(priority: number, value: T) {
    const priorityNode = new PriorityNode<T>(priority, value)
    this.heap.insert(priorityNode)
  }
  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }
  peek(): T | undefined {
    return this.heap.peek()?.value
  }
  size(): number {
    return this.heap.size()
  }
  isEmpty(): boolean {
    return this.heap.isEmpty()
  }
}

export default PriorityQueue