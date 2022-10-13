/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = array => {
//use 2 pointer approach
//assign left index and right index
//use while loop to check if left is less than right
//if the numbers match return the number

// array = arr.sort();
// console.log(array)
// let left = 0;
// let right = array.length-1;

// while (left < right) {
//     if (array[left] === array[right]) return array[left];
//     else if (array[left] < array[right]) left++;
//     else right --;
// array.sort();
// console.log(array)
// newArr = [...new Set(array)];
// console.log(newArr)
// let duplicate = array.filter(el => !newArr.includes(el))
// console.log(duplicate)

array.sort();

for (let i = 0; i < array.length; i++){
    if (array[i] === array[i + 1]) return array[i];
}
};

console.log(duplicateNumber([2,4,1,4]))
console.log(duplicateNumber([1,2,4,4]))
console.log(duplicateNumber([1,5,4,3,6,2,4,7]))


/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = array => {
    array.sort();

    for (let i = 0; i < array.length; i++){
        if (array[i] === array[i + 1]) return array[i];
    }
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
