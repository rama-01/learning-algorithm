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
      if (this.isTail(current)) break
      values.push(current.value)
      current = current.next
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
}

const circularLinkedList = new CircularLinkedList<string>()

circularLinkedList.append('a')
circularLinkedList.append('b')
circularLinkedList.append('c')
circularLinkedList.append('d')
circularLinkedList.removeAt(0)
circularLinkedList.removeAt(100)

circularLinkedList.traverse()

export { }