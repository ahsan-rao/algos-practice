/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/
const maxDepth = arr => {
let maxCount = 0;
//if (Array.isArray(arr)) {
  arr.forEach((el) => {
    let count = (Array.isArray(el)) ? maxDepth(el) : 0;
    if (count > maxCount) maxCount = count;
  });
//}
return 1 + maxCount;
};

//console.log(maxDepth([1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12, []]));
//console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]))

module.exports = {maxDepth};
