/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
let product = 1;
if (power === 0) return 1;
for (let i = 1; i <= power; i++){
  product *= base;
}
return product;
}

console.log(pow(5,0))

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  if (power === 0) return 1;
  return base * powRecurse (base, power - 1)
}

console.log(powRecurse(2,0))

module.exports = { pow, powRecurse };
