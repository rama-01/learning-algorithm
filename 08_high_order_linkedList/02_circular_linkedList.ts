import LinkedList from "./01_实现单向LinkedList"

class CircularLinkedList<T> extends LinkedList<T>{
  append(value: T): void {
    super.append(value)
    this.tail!.next = this.head
  }
  traverse() {
    const values: (T | undefined)[] = []
    let current = this.head
    while (current) {
      // 这里不能直接中止循环，因为还有最后一个元素也要加入数组中
      if (this.isTail(current)) {
        values.push(current.value)
        break
      } else {
        values.push(current.value)
        current = current.next
      }
    }
    values.push(this.head?.value)
    console.log(values.join('->'))
  }
  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position)
    if (isSuccess && (position === this.size - 1 || position === 0)) {
      this.tail!.next = this.head
    }
    return isSuccess
  }
  removeAt(position: number): T | null {
    const value = super.removeAt(position)  //execute parent class，return result of parent class
    if (value && this.tail && (position === 0 || position === this.size)) {
      this.tail!.next = this.head
    }
    return value
  }
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current!.value === value) return index
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
      index++
    }
    return -1
  }
}

const circularLinkedList = new CircularLinkedList<string>()

circularLinkedList.append('a')
circularLinkedList.append('b')
circularLinkedList.append('c')
circularLinkedList.append('d')

console.log(circularLinkedList.get(0));
console.log(circularLinkedList.get(1));
console.log(circularLinkedList.get(2));
console.log(circularLinkedList.get(3));

circularLinkedList.removeAt(0)
circularLinkedList.traverse()
circularLinkedList.removeAt(1)
circularLinkedList.traverse()
circularLinkedList.removeAt(2)
circularLinkedList.traverse()
// console.log(circularLinkedList.indexOf('a'));

// circularLinkedList.traverse()

export { }