import Node from "../types/INode";

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
}

class BSTree<T> {
  root: TreeNode<T> | null = null
}

export { }