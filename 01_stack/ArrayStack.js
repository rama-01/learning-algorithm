// 创建一个栈结构
// 创建一个栈类
class Stack {
  constructor() {
    this.items = []; // 使用数组来存储栈的元素
  }

  // 将元素压入栈顶
  push (element) {
    this.items.push(element);
  }

  // 从栈顶弹出元素
  pop () {
    if (this.isEmpty()) {
      return "栈为空";
    }
    return this.items.pop();
  }

  // 返回栈顶元素
  peek () {
    if (this.isEmpty()) {
      return "栈为空";
    }
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty () {
    return this.items.length === 0;
  }

  // 返回栈的大小
  size () {
    return this.items.length;
  }

  // 清空栈
  clear () {
    this.items = [];
  }
}

export default Stack