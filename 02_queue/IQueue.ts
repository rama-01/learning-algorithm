import IList from "../types/IList"
// 定义队列接口
// 继承线性列表接口
interface IQueue<T> extends IList<T> {
  // 入队方法
  enqueue(element: T): void
  // 出队方法
  dequeue(): T | undefined
  // // peek，查看最先入队的元素
  // peek(): T | undefined
  // // isEmpty
  // isEmpty(): boolean
  // // size
  // size(): number
}

export default IQueue