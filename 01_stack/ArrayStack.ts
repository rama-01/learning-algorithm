// 创建一个栈结构
// 创建一个栈类
class Stack<T> {
  items: T[] = []
  constructor() {
    this.items = []; // 使用数组来存储栈的元素
  }

  // 将元素压入栈顶
  push(element: T): number {
    return this.items.push(element);
  }

  // 从栈顶弹出元素
  pop(): T | undefined {
    if (this.isEmpty()) return
    return this.items.pop();
  }

  // 返回栈顶元素
  peek(): T | undefined {
    if (this.isEmpty()) return
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size(): number {
    return this.items.length;
  }

  // 清空栈
  clear(): void {
    this.items = [];
  }
}

export default Stack