class Node<T> {
  value: T
  next: Node<T> | null = null  //next,是一个泛型类型Node的实例或者null,并设置初始值为null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  head: Node<T> | null = null
  private size: number = 0
  getLength() {
    return this.size
  }
}

const linkedList = new LinkedList<string>()
console.log(linkedList.head)

export { }