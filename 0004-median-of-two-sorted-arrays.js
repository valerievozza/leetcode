// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const size = nums1.length + nums2.length

    if (size === 0) return null
    if (size === 1) return nums1.length > 0 ? nums1[0] : nums2[0]

    let median = (size + 1) / 2
    let result = []
    
    let i = 0, j = 0

    while (i + j <= median) {
      if (nums1[i] < nums2[j] || nums2[j] === undefined) {
        result.push(nums[i])
      }
    }
    // WHAT IS HAPPENING HERE
    // TODO: SOLVE THIS SHIT
};

console.log(findMedianSortedArrays([1,3], [2]), '2')
//console.log(findMedianSortedArrays([1,2], [3,4]), '2.5')