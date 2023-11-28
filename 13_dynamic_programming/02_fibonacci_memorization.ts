const fibonacci = (n: number, memo: number[]): number => {
  if (n <= 1) return n
  if (memo[n]) {
    return memo[n]
  }
  const res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  memo[n] = res
  return res
}

console.log(fibonacci(50, []));

export {}