export const swap = (arr: number[], i: number, j: number) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 编写一个测试函数，验证排序算法正确性
type SortAlgoFn = (arr: number[]) => number[]
export const testSort = (sortFn: SortAlgoFn) => {
  const randomArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  console.log('before sorted', randomArr);
  const sortedArr = sortFn(randomArr)
  console.log('after sorted', sortedArr);
}