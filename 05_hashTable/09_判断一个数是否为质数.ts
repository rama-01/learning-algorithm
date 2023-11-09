const isPrime = (num: number): boolean => {
  let i = 2
  // 优化循环结束条件
  const sqrt = Math.sqrt(num)
  while (i <= num) {
    if (num % i === 0) return false
    i++
  }
  return true
}

console.log(isPrime(13));
console.log(isPrime(133));
console.log(isPrime(1333));

export default isPrime