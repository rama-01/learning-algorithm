import Stack from './ArrayStack'

const isValid = (s) => {
  // 使用栈结构
  const stack = new Stack()
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break;
      case '[':
        stack.push(']')
        break;
      case '{':
        stack.push('}')
        break;
      default:
        if (s[i] !== stack.pop()) return false
        break;
    }
  }
  return stack.isEmpty()
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([])]'));
