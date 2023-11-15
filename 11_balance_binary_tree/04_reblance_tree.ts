import { TreeNode } from "./01_binary_search_tree";
import AVLTreeNode from "./03_right_left_rotate";

class AVLTree<T> extends TreeNode<T> {
  /**
   * 假定找到了不平衡的节点root
   * 考虑再平衡之后，不平衡子树的根节点挂载位置
   * @param root 
   */
  reBalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChildNode
    const current = pivot?.higherChildNode
    let resNode: AVLTreeNode<T> | null
    if (pivot?.isLeft) { //L
      if (current?.isLeft()) {  //LL
        resNode = pivot.rightRotate()
      } else {  //LR
        current!.leftRotate()
        resNode = pivot.rightRotate()
      }
    } else {  //R
      if (current?.isRight()) {  //RR
        resNode = pivot!.leftRotate()
      } else {  //RL
        current!.rightRotate()
        resNode = pivot!.leftRotate()
      }
    }
    // 判断resNode是否为根节点
    if (!resNode?.parent) {
      this.root = resNode
    }
  }
}
// const avlTreeNode = new AVLTreeNode<number>(10)
// const avlTreeNode2 = new AVLTreeNode<number>(20)
// const avlTreeNode3 = new AVLTreeNode<number>(30)
// avlTreeNode.right = avlTreeNode2
// avlTreeNode2.right = avlTreeNode3

// console.log(avlTreeNode.getHeight());
// console.log(avlTreeNode2.getHeight());
// console.log(avlTreeNode3.getHeight());

// console.log(avlTreeNode.getBalanceFactor());
// console.log(avlTreeNode2.getBalanceFactor());
// console.log(avlTreeNode3.getBalanceFactor());

// console.log(avlTreeNode.isBalance);
// console.log(avlTreeNode2.isBalance);
// console.log(avlTreeNode3.isBalance);