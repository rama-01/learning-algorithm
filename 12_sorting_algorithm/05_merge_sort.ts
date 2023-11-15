import { testSort } from './utils'

const mergeSort = (arr: number[]): number[] => {
  //递归的中止条件
  if (arr.length <= 1) return arr
  // 1.拆分数组，divide
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)  //[0,mid),mid不会被剪切
  const rightArr = arr.slice(mid)
  // 2.使用递归继续切割leftArr,rightArr
  const newLeftArr = mergeSort(leftArr)
  const newRightArr = mergeSort(rightArr)
  // 3.双指针
  let i = 0
  let j = 0
  const newArr: number[] = []
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i])
      i++
    } else {
      newArr.push(newRightArr[j])
      j++
    }
  }
  // 4.处理数组中可能剩余的元素
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i))
  }
  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j))
  }
  return newArr
}

testSort(mergeSort)


