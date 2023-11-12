class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  protected head: Node<T> | null = null
  protected size: number = 0
  // 新增tail属性，它总是指向链表尾部
  protected tail: Node<T> | null = null
  // 判断是否居于链表尾部
  protected isTail(node: Node<T> | null): boolean {
    // return !(node!.next)
    return node!.next === this.head
  }
  getLength() {
    return this.size
  }
  append(value: T) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
    }
    this.tail = newNode
    this.size++
  }
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false
    const newNode = new Node(value)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else if (position === this.size) {
      this.tail = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous!.next = newNode
    }
    this.size++
    return true
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
      if (this.size === 1) this.tail = null
    } else {
      // 考虑删除最后一位元素
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      previous!.next = current?.next ?? null
      if (position === this.size - 1) this.tail = previous
    }
    this.size--
    return current?.value ?? null
  }
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    let index = 0
    while (index++ < position && current) {
      current = current.next
    }
    return current?.value ?? null
  }
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    let current = this.head
    if (current === null) return false
    let index = 0
    while (index++ < position && current) {
      current = current.next
    }
    current!.value = value
    return true
  }
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current!.value === value) return index
      current = current.next
      index++
    }
    return -1
  }
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }
  isEmpty(): boolean {
    return this.size === 0
  }
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join('->'))
  }
}

export default LinkedList