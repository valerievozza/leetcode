// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 

/**
 * @param {number} x
 * @return {number}
*/
var reverse = function(x) {
  let digits = String(x).split('')

  // if x is single digit return x
  if (digits.length === 0) return x

  let res = []

  // check if pos or negative
  if (x >= 0) {
    res = digits.reverse()
  } else {
    digits = digits.slice(1)
    res = digits.reverse()
  }
  // check if reverse has leading zeros and remove
  while (res[0] == 0) {
    res.splice(0,1)
  }

  if (Number(res.join('')) < -2147483648 || Number(res.join('')) > 2147483647) return 0

  return x >= 0 ? Number(res.join('')) : '-' + Number(res.join(''))
};

console.log(reverse(123), 321)
console.log(reverse(-123), -321)
console.log(reverse(120), 21)