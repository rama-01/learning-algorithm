class Heap<T> {
  data: T[] = []
  length: number = 0
  isMax: boolean = true
  constructor(arr: T[], isMax = true) {
    if (!isMax) {
      this.isMax = isMax
    }
    this.buildHeap(arr)
  }
  private swap(i: number, j: number) {
    const tmp = this.data[j]
    this.data[j] = this.data[i]
    this.data[i] = tmp
  }
  // 从index开始进行下滤操作
  private heapify(startIndex: number) {
    let index = startIndex
    // 循环的中止条件是，当前索引的左子节点 >= this.length
    while (2 * index + 1 < this.length) {
      let leftIndex = 2 * index + 1
      let rightIndex = leftIndex + 1
      let extremeIndex
      if (this.isMax) {
        extremeIndex = this.data[leftIndex] < this.data[rightIndex] ? rightIndex : leftIndex
        if (this.data[index] > this.data[extremeIndex]) break
      } else {
        extremeIndex = this.data[leftIndex] < this.data[rightIndex] ? leftIndex : rightIndex
        if (this.data[index] < this.data[extremeIndex]) break
      }
      this.swap(index, extremeIndex)
      index = extremeIndex
    }
  }
  insert(value: T) {
    this.data.push(value)
    this.length++
    let index = this.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] <= this.data[parentIndex]) return
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }
  // extract,also delete,这里指提取最大值
  extract(): T | undefined {
    if (!this.data.length) return undefined
    // 如果heap中有元素相等，如何删除
    if (this.data.length === 1) {
      this.length--
      return this.data.pop()
    }
    // 技巧：令被删除元素等于数组最后一个元素，那么heap中就只有一个元素不满足最大堆原则
    // this.data[res] = this.data[this.length - 1]
    this.data[0] = this.data.pop()!
    this.length--
    this.heapify(0)
    return this.data[0]
  }
  peek(): T | undefined {
    return this.data[0]
  }
  size(): number {
    return this.data.length
  }
  isEmpty(): boolean {
    return !this.data.length
  }
  // 原地建堆，在原数组结构中进行下滤操作，最终构成一个堆结构
  buildHeap(arr: T[]) {
    this.data = arr
    this.length = arr.length
    // 从最后一个非叶子节点，进行下滤操作，
    let startIndex = Math.floor((this.length + 1) / 2)
    for (let i = startIndex; i >= 0; i--) {
      this.heapify(i)
    }
  }
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
let heap = new Heap<number>(arr)
console.log('最大堆', heap.data);
heap = new Heap<number>(arr, false)
console.log('最小堆', heap.data);


export default Heap