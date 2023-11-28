const jump = (n: number): number => {
  if (n <= 1) return n
  // 定义初始状态
  let prev = 1  //特殊值，设置为1
  let cur = 1
  for (let i = 2; i <= n; i++) {
    const res = prev + cur
    prev = cur
    cur = res
  }
  return cur
}