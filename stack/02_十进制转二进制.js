import Stack from './ArrayStack'

const decimalToBinary = (num) => {
  const stack = new Stack()
  let res = num //初始条件
  let rem
  while (res > 0) {
    rem = res % 2
    stack.push(rem)
    res = Math.floor(res / 2)
  }
  let s = ''
  while (!stack.isEmpty()) {
    s += stack.pop()
  }
  return s
}

console.log(decimalToBinary(35));
console.log(decimalToBinary(100));