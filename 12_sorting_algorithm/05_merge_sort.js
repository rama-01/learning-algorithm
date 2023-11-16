"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var mergeSort = function (arr) {
  //递归的中止条件
  if (arr.length <= 1)
    return arr;
  // 1.拆分数组，divide
  var mid = Math.floor(arr.length / 2);
  var leftArr = arr.slice(0, mid); //[0,mid),mid不会被剪切
  var rightArr = arr.slice(mid);
  // 2.使用递归继续切割leftArr,rightArr
  var newLeftArr = mergeSort(leftArr);
  var newRightArr = mergeSort(rightArr);
  // 3.双指针
  var i = 0;
  var j = 0;
  var newArr = [];
  while (i < newLeftArr.length && j < newRightArr.length) {
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i]);
      i++;
    }
    else {
      newArr.push(newRightArr[j]);
      j++;
    }
  }
  // 4.处理数组中可能剩余的元素
  if (i < newLeftArr.length) {
    newArr.push.apply(newArr, newLeftArr.slice(i));
  }
  if (j < newRightArr.length) {
    newArr.push.apply(newArr, newRightArr.slice(j));
  }
  return newArr;
};
(0, utils_1.testSort)(mergeSort);
/* 1.经典递归案例 */
/* var factorial = function (n) {
    if (n <= 1)
        return 1;
    return factorial(n - 1) * n;
};
console.log(factorial(5)); */