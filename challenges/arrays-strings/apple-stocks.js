/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
//declare first element as min and max
//compare values along the array and reassign min and max
//return the result max-min

//check if the input is an array and the type of values within the array are numbers
if (!Array.isArray(apple_stock) || typeof(apple_stock[0]) !== 'number' ) return 0;

//declare the first element as min value and checkmin value
let checkMin = min = apple_stock[0];

//declare the second element as max value
let max = apple_stock[1];

//iterate through the input array 
for (let i = 0; i < apple_stock.length; i++){
    //if the array value - checkmin > max - min
    if (apple_stock[i] - checkMin > max - min) 
    {
        //assign the array value to be the max
        max = apple_stock[i];
        //assign the min value to be checkmin
        min = checkMin;
    }
    //if the array value < checkmin
    if (apple_stock[i] < checkMin) {
        //reassign checkmin as the array value
        checkMin = apple_stock[i];
    }
}
//return the difference between min and max
return max-min;
}

apple_stock = [1000, 500, 1500, 2000, 0];
apple_stock1 = 'x'
//console.log(Array.isArray(apple_stock1))
//console.log(highestProfit(apple_stock));
//console.log(highestProfit(apple_stock1));  //return: 1500


module.exports = {highestProfit}