import { swap, testSort, btPrint } from 'hy-algokit'

const heapSort = (arr: number[]): number[] => {
  const n = arr.length
  const start = Math.floor(n / 2 - 1)
  for (let i = start; i >= 0; i--) {
    heapifyDown(arr, n, i)
  }
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapifyDown(arr, i, 0)
  }
  return arr
}
// 最大堆下滤操作
const heapifyDown = (arr: number[], n: number, index: number): number[] => {
  while (2 * index + 1 < n) {
    // 下滤节点的左右叶子节点的索引
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    let largerIndex = leftChildIndex
    if (arr[rightChildIndex] > arr[leftChildIndex] && rightChildIndex < n) {
      largerIndex = rightChildIndex
    }
    if (arr[index] >= arr[largerIndex]) break
    swap(arr, index, largerIndex)
    index = largerIndex
  }
  return arr
}

testSort(heapSort)