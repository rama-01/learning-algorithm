// 代码优化，状态压缩
const fibonacci = (n: number): number => {
  if (n <= 1) return n
    let prev = 0
  let cur = 1
  for (let i = 2; i <= n; i++) {
    const res = prev + cur
    prev = cur
    cur = res
  }
  return cur
}

console.log(fibonacci(10));
console.log(fibonacci(50));

export { } 