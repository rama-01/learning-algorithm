import { TreeNode } from "./01_binary_search_tree";

class AVLTreeNode<T> extends TreeNode<T> {
  // 重写树节点部分属性
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null
  height: number = 1
  // **获取节点高度，递归
  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return Math.max(leftHeight, rightHeight) + 1
  }
  // 获取平衡因子
  getBalanceFactor() {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    return leftHeight - rightHeight
  }
  // 判断节点是否处于平衡
  // getter访问器，实例可以属性访问
  get isBalance(): boolean {
    const factor = this.getBalanceFactor()
    return factor >= -1 && factor <= 1
  }
  // 获取最高的子节点
  public get higherChildNode(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    if (leftHeight < rightHeight) return this.right
    if (leftHeight > rightHeight) return this.left
    // return null
    return this.isLeft() ? this.left : this.right
  }
  // 1.左左情况LL，右旋转
  rightRotate() {
    const isLeft = this.parent?.isLeft()
    const isRight = this.parent?.isRight()
    // 1.找到pivot
    const pivot = this.left
    pivot!.parent = this.parent
    // 2. 处理pivot.right
    this.left = pivot?.right ?? null
    if (pivot?.right) {
      pivot.right.parent = this
    }
    // 3.处理root
    this.parent = pivot
    pivot!.right = this
    // 4.处理pivot挂载位置
    if (!pivot?.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }
    // 返回最新的根节点
    return pivot
  }
  // 2.右右情况RR，左旋转
  leftRotate() {
    const isLeft = this.parent?.isLeft()
    const isRight = this.parent?.isRight()
    // 1.pivot
    const pivot = this.right
    pivot!.parent = this.parent
    // 2.left of pivot
    this.right = pivot?.left ?? null
    if (pivot?.left) {
      pivot.left.parent = this
    }
    // 3.root/this
    this.parent = pivot
    pivot!.left = this
    // 4 position in which pivot mounted
    if (!pivot?.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else if (isRight) {
      pivot.parent.right = pivot
    }
    return pivot
  }
}

const avlTreeNode = new AVLTreeNode<number>(10)
const avlTreeNode2 = new AVLTreeNode<number>(20)
const avlTreeNode3 = new AVLTreeNode<number>(30)
avlTreeNode.right = avlTreeNode2
avlTreeNode2.right = avlTreeNode3

// console.log(avlTreeNode.getHeight());
// console.log(avlTreeNode2.getHeight());
// console.log(avlTreeNode3.getHeight());

// console.log(avlTreeNode.getBalanceFactor());
// console.log(avlTreeNode2.getBalanceFactor());
// console.log(avlTreeNode3.getBalanceFactor());

console.log(avlTreeNode.isBalance);
console.log(avlTreeNode2.isBalance);
console.log(avlTreeNode3.isBalance);

export default AVLTreeNode