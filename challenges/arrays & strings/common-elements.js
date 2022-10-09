/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 

*/

const commonElements = (...args) => {
//declare a result array
//iterate through each input array
//for each array, check if the value is included in array1
//if yes, add it push it to result
//return result
const result = [];
//declare cache object to store frequency of each element
const cache = {};
//concatenate all input arrays
const input = [].concat(...args);
    for (let el of input){
        //increment the value of each key element
        if (cache[el]) {cache[el]++} else {cache[el] = 1}
        //if the frequency is equal to length of args, push it to result
        if (cache[el] === args.length) {result.push(el)}
    }
 //if elements exist in result, return it   
if (result.length !== 0) {return result}
else {return "Nothing in Common!"};
}

arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

// arr1 = [1,2,3,4,5,6];
// arr2 = [1,2,3,4,5]
// arr3 = [1,2,3]
console.log(commonElements(arr3, arr2, arr1))// -> [2, 3, 2000, 'dog']


/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
    const result = [];
    const cache = {};
    const input = [].concat(...args);
        for (let el of input){
            if (cache[el]) {cache[el]++} else {cache[el] = 1}
            if (cache[el] === args.length) {result.push(el)}
        }
    if (result.length !== 0) {return result}
    else {return "Nothing in Common!"};
}

module.exports = {commonElements, commonElementsOptimized} 