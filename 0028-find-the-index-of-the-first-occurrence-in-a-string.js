// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === '' || needle === haystack) return 0;
  if (needle.length > haystack.length) return -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      if (haystack[i] === needle[0]) {
          for (let j = 0; j < needle.length; j++) {
              if (needle[j] !== haystack[i+j]) {
                  break;
              } else if (j === needle.length - 1) {
                  return i;
              }
          }
      }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"), 0)
console.log(strStr("leetcode", "leeto"), -1)