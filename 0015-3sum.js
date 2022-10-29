// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

////////////////////
// optimization once targetSum > 0, stop iterating (bc then you'll be checking for things that add up to the neg of it ---> works bc array is sorted asc) **Do I understand this?
////////////////////

// unsorted array
// need to find 3 nums that add up to 0 --> x + y + z = 0
// sort values in nums arr in asc order for consistent eval
// make targetSum -z to hit using two distinct integers x + y while traversing arr
// [[-1],[0,1,2,-1,-4]] --> test case
// [[-4],[-1,-1,0,1,2]] --> sorted
// [[-4],[-1,-1,0,1,2]] --> targetSum=4, x=-1, y=2 --> -1<targetSum so move left pointer
// [[-4],-1,[-1,0,1,2]] --> targetSum=4, x=-1, y=2 --> -1<targetSum (or check that it's the same and move to next num) so move left pointer
// [[-4],-1,-1,[0,1,2]] --> targetSum=4, x=0, y=2 --> 2<targetSum so move left pointer
// [[-4],-1,-1,0,[1,2]] --> targetSum-4, x=1, y=2 --> 3<targetSum (and stop checking before the indices are equal bc need to be distinct nums)
// [-4,[-1],[-1,0,1,2]] --> targetSum=1, x=-1, y=2 --> 1===targetSum so add to potential solutions array


// ROADMAP:
// 1. sort the array, declare solutions array
// 2. always remain the same: always move and sign targetSum through the array (loop)
//      3. calculate targetSum (-z)
//      4. create subarray x+y --> set two pointers here aka left = i+1, right = nums.length-1
//      5. check to see if left + right = targetSum
//          6. 3 outcomes to check
//              a. >targetSum, right-- until different number
//              b. <targetSum, left++ until different number
//              c. create potential solution and push to a new solutions array
//                  left++
//              d. if no potential solution, change targetSum to i++

// need to find 3 nums x + y + z = 0 --> x + y = -z

var threeSum = function(nums) {
  // if less than zero return empty array
  if (nums.length < 3) {
    return []
  }

  // sort array
  nums = nums.sort((a,b) => a - b)

  // declare solutions array
  let solutions = []

  // loop through nums
  for (let i = 0; i < nums.length - 2; i++) {

    // skip duplicate
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // set left and right pointers
    let left = i+1
    let right = nums.length - 1

    // before left pointer crosses right pointer
    while (left < right) {

      // sum is sum of 3 nums
      let sum = nums[i] + nums[left] + nums[right]

      // if sum is 0
      if (sum === 0) {
        // add nums to solutions
        solutions.push([nums[i], nums[left], nums[right]])
        // skip duplicates
        while (nums[left] === nums[left+1]) left++
        while (nums[right] === nums[right-1]) right--
        // move left and right pointers
        left++
        right--
        // if sum is greater than zero, move right pointer lower -- need to check lower nums
      } else if (sum > 0) {
        right--
        // else move left pointer up to check higher nums
      } else {
        left++
      }

    }

  }
  return solutions

};

// if less than 0, return empty array
// declare solutions
// sort nums asc
// for loop
// check for duplicate
// declare left and right pointers
// while loop
// declare sum
// if sum = 0
// check for duplicates
// move pointers
// else if sum < 0 move left pointer
// else move right pointer
// return solutions

// function threeSums(nums) {
//   if (nums.length - 3) return []
//   const solutions = []

//   nums = nums.sort((a, b) => a - b)

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue

//     let left = i + 1
//     let right = nums.length - 1

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right]

//       if (sum === 0) {
//         solutions.push([nums[i], nums[left], nums[right]])
//         while (nums[left] === nums[left+1]) left++
//         while (nums[right] === nums[right-1]) right--
//         left++
//         right--
//       } else if (sum < 0) {
//         left++
//       } else {
//         right--
//       }
//     }
//   }
//   return solutions
// }

// var threeSum = function(nums) {
//   // If less than 3 elements, there can't be 3 nums that add up to 0
//   if (nums < 3) {
//     return []
//   }
//   // Sort array in ascending order
//   nums = nums.sort((a,b) => a - b)

//   console.log(`SORTED: ${nums}`)
  
//   // Declare empty array to push solutions into
//   let solutions = []

//   // Loop through nums, stopping before you get to the last two elements (because you need to leave 2 nums to compare to)
//   for (let i = 0; i < nums.length - 2; i++) {
//     console.log(`----LOOP ${i}----`)

//     // If the number is equal to the previous number (that we're already checked, skip it)
//     // The first element cannot be a duplicate so only start checking for duplicates at index 1
//     if (i > 0 && nums[i] === nums[i - 1]) continue

//     let left = i+1 // Set left pointer as num directly after num we're comparing to for this loop
//     let right = nums.length - 1 // Set right pointer as last element of array
//     console.log(`----NUMS:----\n${nums[i]}, ${nums[left]}, ${nums[right]}`)

//     // While left index is less than right index
//     // Don't want to compare the same number to itself (nums have to be at unique indices), or let left and right cross (redundant)
//     while (left < right) {

//       // Sum is sum of 3 nums
//       let sum = nums[i] + nums[left] + nums[right]

//       // If the sum meets the criteria (adds up to 0)
//       if (sum === 0) {
//         // Add nums to solutions array
//         solutions.push([nums[i],nums[left],nums[right]])
        
//         // Don't want to compare duplicates for left or right either, so move to next left or right
//         while (nums[left] === nums[left+1]) left++
//         while (nums[right] === nums[right+1]) right--

//         // move left pointer & right pointer
//         left++
//         right--

//         // If the sum is greater than zero, move right pointer left so we can check lower numbers
//       } else if (sum > 0) {
//         right --
//         // Else the sum is too low so we need to check higher numbers; move left pointer to the right
//       } else {
//         left ++
//       }

//     }
//   }
//   return solutions
// };

console.log(threeSum([-1,0,1,2,-1,-4]), "SOLUTION: [[-1,-1,2],[-1,0,1]]")