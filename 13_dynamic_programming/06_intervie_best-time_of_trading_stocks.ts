const maxProfit = (price: number[]): number => {
  const n = price.length
  if (n <= 1) return 0
  // 定义初始状态
  let dp: number[] = []
  dp[0] = 0
  let minPrice = price[0]
  for (let i = 1; i < n; i++) {
    dp[i] = price[i] - minPrice
    minPrice = Math.min(minPrice, price[i])
  }
  return Math.max(...dp)
}

const price = [7, 1, 5, 3, 6, 0, 4]
console.log(maxProfit(price));

export { }