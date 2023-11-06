class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


// 思路：使当前节点value=下一个节点value，并且指向下一节点的下一节点
function deleteNode(node: ListNode | null): void {
  node!.val = node!.next!.val
  node!.next = node!.next!.next
}