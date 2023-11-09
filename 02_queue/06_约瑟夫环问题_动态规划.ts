const lastRemaining = (n: number, m: number) => {
  let position = 0
  for (let i = 2; i <= n; i++) {
    console.log(i);
    position = (position + m) % i
  }
  return position
}

console.log(lastRemaining(5, 3))
console.log('--------------');
console.log(lastRemaining(10, 17))
