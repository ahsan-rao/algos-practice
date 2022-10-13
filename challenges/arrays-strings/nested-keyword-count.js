/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
    let count = 0;
    array = array.flat(Infinity);
    for (let el of array) {
        if (el === keyword) {
            count++
        }
    }
    return count;
};


console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')) //-> 2 because 'hi' appears twice
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')) //-> 3
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol')) //-> 0

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
    let count = {};
    let result = [];
    array = array.flat(Infinity);
    //console.log(array)
    for (let el of array) {
        count[el] = (count[el] + 1) || 1;
    }
    //console.log(count)
    let max = Math.max(...Object.values(count));
    //console.log(max)
    for (let key in count){
        if (count[key]) {
            if (count[key] >= max) {
                result.push(key)
            }
        }
    }

    return result.sort();
};


// console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])) //-> ['bat', 'cars']
// console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool']))// ['cool']
// console.log(keywordMode(['bye', 'cool', 'bye', 'bye']))
// console.log(keywordMode(['y', 'hi', 'bright', 'x', 'z', 'x', 'hi', 'y', 'light']))
// console.log(keywordMode([[['bye'], 'cool'], ['bye', 'bye']]))
// console.log(keywordMode(['y', ['hi'], [['bright', ['x']], ['z', 'x']], 'hi', [['y']], 'light']))
// console.log(keywordMode([[[[], 'bye'], 'cool'], [], ['bye', [[]], 'bye']]))
// console.log(keywordMode(['y', [], ['hi'], [['bright', ['x'], []], ['z', 'x']], 'hi', [[], ['y']], [], 'light']))

module.exports = {keywordCount, keywordMode};
