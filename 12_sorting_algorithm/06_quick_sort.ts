import { swap, testSort } from './utils'

const quickSort = (arr: number[]): number[] => {
  partition(0, arr.length - 1)
  // 如果写成箭头函数，会报错
  function partition(left: number, right: number) {
    if (left >= right) return
    // 确定基准值
    const pivot = arr[right]
    // 双指针
    let i = left
    let j = right - 1
    while (i <= j) {
      // 指针移动条件
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      // 循环结束的条件是，左指针比基准值大，右指针比基准值小，并交换位置
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    swap(arr, i, right)
    partition(left, j)
    partition(i + 1, right)
  }
  return arr
}

testSort(quickSort)