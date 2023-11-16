import { testSort } from './utils'

const insertionSort = (arr: number[]): number[] => {
  /* 基本思路：第一个元素默认有序，从第二个元素开始依次遍历数组，内层循环则比较newNum和已排序数组，遍历后者并与newNum比较，直至newNum较小并插入其中 */
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i - 1
    const newNum = arr[i]
    while (newNum < arr[j] && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = newNum
  }
  return arr
}

testSort(insertionSort)