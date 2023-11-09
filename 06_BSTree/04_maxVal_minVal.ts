import Node from "../types/INode";
import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
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
  // 先序遍历
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
  // 中序遍历,所有树的根节点在中间访问
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }
  // 后序遍历，与先序遍历相反
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }
  // 层序遍历，不适用递归
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
  // preOrderTraverse
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  // inOrderTraverse()
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  // postOrderTraverse
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  // levelOrderTraverse
  levelOrderTraverse() {
    if (!this.root) return
    // 使用数组模拟队列结构
    const queue: TreeNode<T>[] = []
    queue.push(this.root)
    while (queue.length) {
      const node = queue.shift()!
      console.log(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }
  // 最大值
  getMaxVal() {
    if (!this.root) return
    let currentNode = this.root
    let max = currentNode.value
    while (currentNode.right) {
      currentNode = currentNode.right
      max = currentNode.value
    }
    return max
  }
  // 最小值
  getMinVal() {
    if (!this.root) return
    let currentNode = this.root
    let min = currentNode.value
    while (currentNode.left) {
      currentNode = currentNode.left
      min = currentNode.value
    }
    return min
  }
}

const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()
// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()\
// bst.levelOrderTraverse()
console.log(bst.getMaxVal());
console.log(bst.getMinVal());

export default BSTree