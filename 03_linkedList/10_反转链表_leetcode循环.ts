import ListNode from "../types/ListNode"

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null
  let newHead: ListNode | null = null
  while (head) {
    let current = head.next
    head.next = newHead
    newHead = head
    head = current
  }
  return newHead
}

// 测试代码
const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead = reverseList(node1)
let current = newHead
while (current) {
  console.log(current.val);
  current = current.next
}