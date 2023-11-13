export class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

export default class BilateralNode<T> extends Node<T> {
  prev: BilateralNode<T> | null = null
  // 重写next属性
  next: BilateralNode<T> | null = null
}