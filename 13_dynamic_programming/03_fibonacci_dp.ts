const fibonacci = (n: number): number => {
  // 1. 定义状态
  // 2. 初始化状态
  const dp: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    // 3. 状态转移方程
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // 4。计算最终结果
  return dp[n]
}

console.log(fibonacci(100));

export { }