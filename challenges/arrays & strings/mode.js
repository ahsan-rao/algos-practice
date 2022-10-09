/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  let count = {};
  let maxCount = 0;
  let modeNum;
  for (let i = 0; i < array.length; i++) {
     count[array[i]] = (count[array[i]] || 0) + 1;
  }
  for (let key in count) {
      if (count[key] >= maxCount) {
        maxCount = count[key];
        modeNum = key;
      }
  }
  return parseInt(modeNum);
}

console.log(mode([3, 2, 4, 3]))// -> 3
console.log(mode([7, 7, 5, 8, 8, 9, 9, 2, 5])) //-> 8
console.log(mode([12, 5, 32, 4]))

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {

const flatten = arr => {
    let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === 'object') {
        arr1 = arr1.concat(flatten(arr[i]));
      } else { arr1.push(arr[i])}
  }
  return arr1;
};

const arr1 = flatten(array);

let count = {};
let maxCount = 0;
let modeNum;
for (let i = 0; i < arr1.length; i++) {
count[arr1[i]] = (count[arr1[i]] || 0) + 1;
}
for (let key in count) {
    if (count[key] >= maxCount) {
    maxCount = count[key];
    modeNum = key;
    }
}
return parseInt(modeNum);  

}

console.log(modeNested([[3], [2, [4]], 3]))// -> 3
console.log(modeNested([7, [[5, [8], 8], 2, 5]]))// -> 8
console.log(modeNested([4, []])) //-> 4 
module.exports = {mode, modeNested};
