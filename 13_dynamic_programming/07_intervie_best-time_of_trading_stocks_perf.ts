const maxProfit = (price: number[]): number => {
  const n = price.length
  if (n <= 1) return 0
  let prev = 0
  // 定义初始状态
  let minPrice = price[0]
  for (let i = 1; i < n; i++) {
    // 更新状态值
    // 更新最小值
    prev = Math.max(price[i] - minPrice, prev)
    minPrice = Math.min(minPrice, price[i])
  }
  return prev
}

const price = [7, 1, 5, 3, 6, 0, 4]
console.log(maxProfit(price));

export { }