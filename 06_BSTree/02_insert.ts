import Node from "../types/INode";
import { btPrint, PrintableNode } from 'hy-algokit'
class TreeNode<T> extends Node<T> implements PrintableNode {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T>  {
  // root最好不对外暴露
  private root: TreeNode<T> | null = null
  // 封装插入方法, 使用递归
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // 左子节点为null,令左子节点=newNode;否则，递归调用插入节点方法
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // print
  print() {
    btPrint(this.root)
  }
  // insert
  insert(value: T) {
    const newNode = new TreeNode(value)
    // 判断根节点是否为null
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
}

// 定义手机类
class Phone {
  // name: string
  // price: number
  // constructor(name: string, price: number) {
  //   this.name = name
  //   this.price = price
  // }
  // 或者使用typescript的语法糖
  constructor(public name: string, public price: number) { }
  valueOf() {
    return this.price
  }
}

const p1 = new Phone('apple', 129)
const p2 = new Phone('xiaomi', 100)
const p3 = new Phone('huawei', 133)
const p4 = new Phone('oppo', 98)

const bst = new BSTree<Phone>()
bst.insert(p1)
bst.insert(p2)
bst.insert(p3)
bst.insert(p4)

bst.print()

export default BSTree