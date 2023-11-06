class Node<T> {
  value: T
  next: Node<T> | null = null  //next,是一个泛型类型Node的实例或者null,并设置初始值为null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0
  private reverseRecursive(node: Node<T> | null): Node<T> | null {
    if (!node || !node.next) {
      return node
    }
    let reversedHead = this.reverseRecursive(node.next)
    node.next.next = node
    node.next = null
    return reversedHead
  }
  // append
  append(value: T) {
    // 创建一个新节点
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      // current.next有值，指向下一个节点
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }
  // 遍历链表方法
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join('->'))
  }
  // 反转链表-使用迭代方法
  reverse() {
    let previous: Node<T> | null = null
    let current = this.head
    while (current) {
      let nextNode = current.next
      current.next = previous
      previous = current
      current = nextNode
    }
    this.head = previous
  }
  // 反转链表-递归方法
  reverse2() {
    this.head = this.reverseRecursive(this.head)
  }
  // 利用栈实现链表反转-数组模拟栈
  reverse3(head: Node<T> | null): Node<T> | null {
    if (head === null) return null
    if (!head.next) return head
    const stack: Node<T>[] = []
    let current = this.head
    while (current) {
      stack.push(current)
      current = current.next
    }
    const newHead: Node<T> = stack.pop()!
    let currentNode = newHead
    while (stack.length) {
      const node = stack.pop()!
      currentNode!.next = node
      currentNode = currentNode.next
    }
    currentNode.next = null  //最后一个元素指向null，否则会引起循环引用报错
    return currentNode
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
linkedList.traverse()
linkedList.reverse2()
// linkedList.reverse3()
export { }