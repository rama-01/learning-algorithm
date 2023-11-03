interface IList<T> {
  // peek，查看最先入队的元素
  peek(): T | undefined
  // isEmpty
  isEmpty(): boolean
  // size
  size(): number
}

export default IList