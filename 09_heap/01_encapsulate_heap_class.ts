class Heap<T> {
  data: T[] = []
  length: number = 0
  private swap(i: number, j: number) {
    const tmp = this.data[j]
    this.data[j] = this.data[i]
    this.data[i] = tmp
  }
  insert(value: T) { }
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

export default Heap