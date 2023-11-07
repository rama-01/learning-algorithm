const sequenceSearch = (arr: number[], num: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return num
  }
  return -1
}

// test
const res = sequenceSearch([1, 2, 3, 4, 5], 41)
console.log(res)

export default sequenceSearch