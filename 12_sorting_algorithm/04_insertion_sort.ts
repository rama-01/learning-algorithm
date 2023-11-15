import { testSort } from './utils'

const insertionSort = (arr: number[]): number[] => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const newNum = arr[i]
    let j = i - 1
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]  //模拟插入元素
      j--
    }
    arr[j + 1] = newNum
  }
  return arr
}

testSort(insertionSort)