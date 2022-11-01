// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// return true if array contains duplicates, else false
// integers only, won't be empty


var containsDuplicate = function(nums) {
  // if length is 1, return false
  if (nums.length === 1) {
      return false
  }
  // declare empty obj
  const obj = {}
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
      // check if each number exists in the object
      if (!obj[nums[i]]) {
          // if it doesn't, add it
          obj[nums[i]] = 1
      } else {
          // if it does, return true
          return true
      }
  }
  
  // if there are no duplicates, return false
  return false
};