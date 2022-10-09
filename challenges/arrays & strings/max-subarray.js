/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

const maxSubarray = (arr) => {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  for (let i = 0; i < arr.length; i++){
    maxEndingHere += arr[i];
    if (maxSoFar < maxEndingHere) {maxSoFar = maxEndingHere}
    if (maxEndingHere < 0) {maxEndingHere = 0}
  }
  return maxSoFar;
}

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  for (let i = 0; i < arr.length; i++){
    maxEndingHere += arr[i];
    if (maxSoFar < maxEndingHere) {maxSoFar = maxEndingHere}
    if (maxEndingHere < 0) {maxEndingHere = 0}
  }
  return maxSoFar;
}

module.exports = { maxSubarray, kadanesMaxSubarray };
