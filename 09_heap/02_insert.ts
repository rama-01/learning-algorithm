class Heap<T> {
  data: T[] = []
  length: number = 0
  private swap(i: number, j: number) {
    const tmp = this.data[j]
    this.data[j] = this.data[i]
    this.data[i] = tmp
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
  extract(): T | undefined {
    return undefined
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
  buildHeap(arr: T[]) {
  }
}

const heap = new Heap<number>()
const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]

for (const item of arr) {
  heap.insert(item)
}

console.log(heap.data);

export default Heap