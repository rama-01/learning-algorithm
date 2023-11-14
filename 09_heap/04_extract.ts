class Heap<T> {
  data: T[] = []
  length: number = 0
  private swap(i: number, j: number) {
    const tmp = this.data[j]
    this.data[j] = this.data[i]
    this.data[i] = tmp
  }
  // 从index开始进行下滤操作
  private heapify_down(startIndex: number) {
    let index = startIndex
    // 循环的中止条件是，当前索引的左子节点 >= this.length
    while (2 * index + 1 < this.length) {
      let leftIndex = 2 * index + 1
      let rightIndex = leftIndex + 1
      // let largerIndex = leftIndex
      let largerIndex = this.data[leftIndex] < this.data[rightIndex] ? rightIndex : leftIndex
      // if (rightIndex < this.length && this.data[leftIndex] < this.data[rightIndex]) {
      //   largerIndex = rightIndex
      // }
      if (this.data[index] > this.data[largerIndex]) break
      this.swap(index, largerIndex)
      index = largerIndex
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
    this.heapify_down(0)
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
      this.heapify_down(i)
    }
  }
}

const heap = new Heap<number>()
const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]

// for (const item of arr) {
//   heap.insert(item)
// }

// console.log(heap.data);
// heap.extract()
// console.log(heap.data);

heap.buildHeap(arr)
console.log(heap.data);


export default Heap