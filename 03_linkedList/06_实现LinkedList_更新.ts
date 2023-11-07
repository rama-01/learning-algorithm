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
  getLength() {
    return this.size
  }
  // append(链表尾部追加)
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
  // insert
  insert(value: T, position: number): boolean {
    // 判断插入位置,false:插入失败；true：插入成功
    if (position < 0 || position > this.size) return false
    const newNode = new Node(value)
    // 是否插入头部
    if (position === 0) {
      // 这里顺序不能反了，新节点指向head，head指向新节点；如果反了，会引起循环指向
      newNode.next = this.head
      this.head = newNode
    } else {
      // 双指针
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
  // 删除指定位置的元素并返回该元素
  removeAt(position: number): T | null {
    // 考虑边界情况
    if (position < 0 || position >= this.size) return null
    // 删除第一个元素
    let current = this.head
    if (position === 0) {
      // 也可以使用断言
      // ?：这是 TypeScript 的可选链操作符。它用于检查 this.head 是否为 null 或 undefined，以避免在它的属性 next 上访问时产生错误。
      // ??：这是 TypeScript 的空值合并操作符。它用于判断表达式左边是否为 null 或 undefined，如果是，则返回右边的值，否则返回左边的值。
      this.head = current?.next ?? null
    } else {
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        // 双指针向后移动
        previous = current
        current = current.next
      }
      // 找到了position
      previous!.next = current?.next ?? null
    }
    this.size--
    return current?.value ?? null
  }
  // 获取给定位置的元素
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    let index = 0
    while (index++ < position && current) {
      current = current.next
    }
    return current?.value ?? null
  }
  // 更新/修改 update
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    // 部分逻辑同链表get方法
    let current = this.head
    // 链表为空，报错或返回error
    if (current === null) return false
    let index = 0
    while (index++ < position && current) {
      current = current.next
    }
    current!.value = value
    return true
  }
  // 获取索引 indexOf
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
}

const linkedList = new LinkedList<string>()
// append
linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
linkedList.traverse()
// remove
console.log('remove');
// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(0));
// get
// console.log(linkedList.get(0), linkedList.get(1), linkedList.get(2));
// update
// console.log('update');
// console.log(linkedList.update('e', 3));
// linkedList.traverse()
// indexOf
console.log('indexOf');
// console.log(linkedList.indexOf('a'));
// console.log(linkedList.indexOf('b'));
// console.log(linkedList.indexOf('c'));
// console.log(linkedList.indexOf('d'));
// console.log(linkedList.indexOf('e'));
export { }