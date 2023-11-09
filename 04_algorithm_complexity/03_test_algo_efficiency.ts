// import { testOrderSearchEfficiency } from 'hy-algokit'
import sequenceSearch from "./01_sequenceSearch";
import binarySearch from "./02_binarySearch";

let arr = new Array(10000000).fill(0).map((_, index) => index)
let target = 5000000
// sequence
const start = performance.now()
sequenceSearch(arr, target)
const end = performance.now()
console.log('sequenceSearch', end - start);
// binary
const start2 = performance.now()
binarySearch(arr, target)
const end2 = performance.now()
console.log('binarySearch', end2 - start2);
console.log((end - start) / (end2 - start2));

// testOrderSearchEfficiency(sequenceSearch)
// testOrderSearchEfficiency(binarySearch)

export { }