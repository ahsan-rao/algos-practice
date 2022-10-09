/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => { 
  let left = 0;
  let right = arr.length - 1;
  arr = arr.sort((a,b) => a-b);
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target){
      left++
    } else { right-- }
  }
  return false;
}

//const nums = [2, 5, 11, 15]
//console.log(twoSum(nums, 7));
//console.log(twoSum(nums, 9));

const arr = [-1, -1, -2, -4, -5]
console.log(twoSum(arr, -2))

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 
  const copyArr = [...arr];
  copyArr.sort((a, b)=> a - b);
  for (let i = 0; i < copyArr.length - 2; i++) {
    let j = i + 1;
    let k = copyArr.length - 1;
    while (j < k) {
      if (copyArr[i] + copyArr[j] + copyArr[k] === target) return true;
      else if (copyArr[i] + copyArr[j] + copyArr[k] < target) j++;
      else k--;
    }
  }
  return false;
}





module.exports = { twoSum, threeSum };