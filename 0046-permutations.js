// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
*/

// TODO: FIND SOLUTION LOL

function permute(nums) {
  let result = []

  if (nums.length === 1) return [nums]

  for (let num of nums) {
    let n = nums.shift()
    let perms = permute(nums)
    for (let perm of perms) {
      perm.push(n)
    }
    result.push(perms)
    nums.push(n)
  }
  return result
};

console.log(permute([1,2,3]), "ANSWER:", [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
console.log(permute([0,1]), "ANSWER:", [[0,1],[1,0]])
console.log(permute([1]), "ANSWER:", [[1]])