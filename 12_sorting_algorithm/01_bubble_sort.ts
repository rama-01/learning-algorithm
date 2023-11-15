import { swap, testSort } from "./utils"

const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length
  // 外层循环控制冒泡排序的次数，应该为arr.length-1
  for (let i = 0; i < len - 1; i++) {
    // if (arr[i] > arr[i + 1]) swap(i, i + 1)
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}


testSort(bubbleSort)