import { swap, testSort } from './utils'

const quickSort = (arr: number[]): number[] => {
  partition(0, arr.length - 1)
  // 如果写成箭头函数，会报错
  function partition(left: number, right: number) {
    if (left >= right) return
    // 确定基准值
    // 优化：为了避免pivot每次取到最大值或最小值，可以采取三数取中
    // const mid = left + Math.floor((left + right) / 2)
    // if (arr[left] > arr[right]) swap(arr, left, right)
    // if (arr[mid] > arr[right]) swap(arr, mid, right)
    // if (arr[left] > arr[mid]) swap(arr, left, mid)
    // swap(arr, mid, right)
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