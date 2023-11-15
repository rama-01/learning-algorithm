import { swap, testSort } from "./utils"
const selectionSort = (arr: number[]): number[] => {
  const len = arr.length
  for (let j = 0; j < len - 1; j++) {
    let minIndex = j
    for (let i = j + 1; i < len; i++) {
      if (arr[i] < arr[minIndex]) {
        // swap(arr, minIndex, i)
        minIndex = i
      }
    }
    if (j !== minIndex) swap(arr, j, minIndex)
  }
  return arr
}


testSort(selectionSort)