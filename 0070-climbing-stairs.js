// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step



// Input: n = 4
// Output: 5
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 steps
// 3. 1 step + 2 steps + 1 step
// 4. 2 steps + 1 step + 1 step
// 5. 2 steps + 2 steps

// Input: n = 5
// Output: 8
// Explanation: There are three ways to climb to the top.
// 1. 1,1,1,1,1
// 2. 1,1,1,2
// 3. 1,1,2,1
// 4. 1,2,1,1
// 5. 2,1,1,1
// 6. 2,2,1
// 7. 2,1,2
// 8. 1,2,2

// Input: n = 6
// Output: 
// Explanation: There are three ways to climb to the top.
// 1. 1,1,1,1,1,1
// 2. 1,1,1,1,2
// 3. 1,1,1,2,1
// 4. 1,1,2,1,1
// 5. 1,2,1,1,1
// 6. 2,1,1,1,1
// 7. 2,2,1,1
// 8. 2,1,2,1
// 9. 2,1,1,2
// 10. 1,1,2,2
// 11. 1,2,1,2
// 12. 1,2,2,1
// 13. 2,2,2
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2

  const fib = [1,2]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib[fib.length - 1]
};

console.log(climbStairs(5), 8)