import BilateralNode from "./LinkedNode";
import LinkedList from "./01_实现单向LinkedList";

class BilateralLinkedList<T> extends LinkedList<T> {
  // 重写基类的节点属性
  protected head: BilateralNode<T> | null = null
  // 新增tail属性，它总是指向链表尾部
  protected tail: BilateralNode<T> | null = null
  // 重写或新增append,prepend,postTraverse,insert,removeAt
  append(value: T) {
    const newNode = new BilateralNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size++
  }
  prepend(value: T) {
    const newNode = new BilateralNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 画草图
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size++
  }
  // 反向遍历双向链表
  postTraverse() {
    let current = this.tail
    const values: T[] = []
    while (current) {
      values.push(current.value)
      current = current.prev
    }
    console.log(values.join('->'));
  }
}

const bilateralLinkedList = new BilateralLinkedList<string>()

bilateralLinkedList.append('a')
bilateralLinkedList.append('b')
bilateralLinkedList.append('c')
bilateralLinkedList.append('d')
bilateralLinkedList.append('e')



bilateralLinkedList.traverse()
bilateralLinkedList.postTraverse()