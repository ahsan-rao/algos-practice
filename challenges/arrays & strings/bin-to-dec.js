/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/
//declare sum
//split input string to array
//shift each char from end of string to start of array
//multiple char by 2 to the power of array index
//add result to sum
//return sum


function binToDec(binString){
let sum = 0;
binString= binString.split("").reverse().join("");
for (let i = 0; i < binString.length; i++){
    let char = binString[i];
    sum += char*(2**(i));
}
return sum;
}

console.log(binToDec('0101'))

module.exports = {binToDec};