/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

// sort array in ascending order by 0 element
    //if b0 >= a1 & b0 < b1
    //intervals.splice(intervals[a0,b1], delete both elements, )

const mergeRanges = intervals => {
  const compare = ([a0,b0], [a1,b1]) => {
    if (a0 !== a1) return a0 - a1;
  }
  intervals.sort(compare);
  //console.log(intervals);
  const result = [intervals[0]];
  //console.log(result)
  for(let current of intervals){
    previous = result[result.length - 1];
    //console.log(previous)
    if (previous[1] >= current[0]) {
    //console.log(previous[1])
    //console.log(current[0])
    //console.log(current[1])
        previous[1] = Math.max(current[1], previous[1])
    } else {
        result.push(current);
        //console.log(current)
    }
  }
  return result;
};

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(intervals)) // [[0, 1], [3, 8], [9, 12]]
module.exports = {mergeRanges};
