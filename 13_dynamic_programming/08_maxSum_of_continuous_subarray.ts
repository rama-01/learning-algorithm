const maxSumOfSubarray = (arr: number[]): number => {
  const n = arr.length
  let dp: number[] = []
  dp[0] = arr[0]
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i])
  }
  return Math.max(...dp)
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSumOfSubarray(arr));


