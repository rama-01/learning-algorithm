const binarySearch = (arr: number[], num: number): number => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midNum = arr[mid]
    if (midNum === num) {
      return midNum
    } else if (midNum > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

const res = binarySearch([1, 2, 3, 4, 5], 55)
console.log(res)

export default binarySearch
