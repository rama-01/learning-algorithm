import Node from "../types/INode";
import { btPrint } from 'hy-algokit'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  // 当前节点的父节点
  parent: TreeNode<T> | null = null
  // 当前节点是否为父节点的左节点
  // 下面这种写法是错误的，
  // isLeft: boolean = !!(this.parent && this.parent.left === this)
  // isRight: boolean = !!(this.parent && this.parent.right === this)
  isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }
  isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
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
  // 查找，不使用递归，辅助函数
  private searchInRecursiveNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false
    if (node.value === value) return true
    if (value > node.value) {
      return this.searchInRecursiveNode(node.right, value)
    } else {
      return this.searchInRecursiveNode(node.left, value)
    }
  }
  // 抽离查找和删除方法的公共代码，重构
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      if (value === current.value) return current
      parent = current
      if (value > current.value) {
        current = current.right
      } else {
        current = current.left
      }
      // 通过current节点保存当前的父节点
      // 这里不能使用断言，断定current一定有parent属性 因为它可能是null
      if (current) current.parent = parent
    }
    return null
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
  // search 非递归
  search(value: T): boolean {
    return !!this.searchNode(value)
  }
  // 使用递归
  searchInRecurse(value: T): boolean {
    return this.searchInRecursiveNode(this.root, value)
  }
  // 删除 搜索节点并返回父节点
  remove(value: T): boolean {
    const current = this.searchNode(value)
    console.log('当前节点及父节点', current?.value, current?.parent?.value);
    if (!current) return false
    /* 情况一：删除叶子节点 */
    // 叶子节点判断条件，当前节点的左右叶子节点等于null
    // 在判断当前节点相对于父节点是左子节点还是右子节点
    if (current.left === null && current.right === null) {
      // 检查左右节点
      // 考虑边界情况
      // 如果当前节点为根节点，那么其父节点等于null
      if (current === this.root) this.root = null
      if (current.isLeft()) current.parent!.left = null
      if (current.isRight()) current.parent!.right = null
      /* if (current === this.root) {
              this.root = null
            } else if (current.isLeft()) {
              current.parent!.left = null
            } else {
              current.parent!.right = null
            } */
      // **以上两种写法无区别，第一种写法if后的条件语句最多有一个
    }

    /* 情况二：只有一个节点 */
    // 只有左子节点
    if (current.right === null) {
      if (current === this.root) this.root = current.left
      if (current.isLeft()) current.parent!.left = current.left
      if (current.isRight()) current.parent!.right = current.left
    }
    // 只有右子节点
    if (current.left === null) {
      if (current === this.root) this.root = current.right
      if (current.isLeft()) current.parent!.left = current.right
      if (current.isRight()) current.parent!.right = current.right
    }

    // refactor 重构错误
    /* let pos: string = ''
    // current.isLeft() ? pos = 'left' : 'right'
    if (current.isLeft()) pos = 'left'
    if (current.isRight()) pos = 'right'
    if ((!!current.left || !!current.right) && (!!current.left || !!current.right)) {
      if (current === this.root) this.root = current[pos]
      if (current.isLeft()) current.parent!.left = current[pos]
      if (current.isRight()) current.parent!.right = current[pos]
    } */
    return true
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
// console.log(bst.getMaxVal());
// console.log(bst.getMinVal());
// console.log(bst.searchInRecurse(14));
// console.log(bst.searchInRecurse(111));
// bst.remove(8)
// bst.remove(25)
bst.remove(3)
bst.remove(14)
bst.print()
bst.remove(5)
bst.remove(13)

bst.print()

export default BSTree