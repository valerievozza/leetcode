// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */

// array of at least one string, strings may be empty, all lowercase letters (no nums, special chars, spaces, etc)
// longest str of chars that all strings have in common (must be at beginning of each string)


var longestCommonPrefix = function(words) {
  // if array of words is empty, they have empty string in common
  if (words.length === 0) {
    return ''
  }

  // set prefix to first word in array
  let prefix = words[0]

  // loop through array of words
  for (let i = 0; i < words.length; i++) {
    // while the current version of the prefix doesn't appear at the beginning of the current word
    while (words[i].indexOf(prefix) !== 0) {
      // shorten the prefix by one letter each iteration
      prefix = prefix.substring(0, prefix.length - 1)
    }
  }
  return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl')
console.log(longestCommonPrefix(["dog","racecar","car"]), '')
console.log(longestCommonPrefix(["potato","pot","spot"]), '')
console.log(longestCommonPrefix(["home","homebody","homeopathic"]), 'home')