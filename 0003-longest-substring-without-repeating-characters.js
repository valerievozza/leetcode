// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
*/

/**
 * @param {string} s
 * @return {number}
*/


var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0
  
  let longest = ''
  let current = ''

  for (let i = 0; i < s.length; i++) {
    console.log(`---LOOP ${i}---`)
    if (!current.includes(s[i])) {
      current += s[i]
      
      if (current.length > longest.length) {
        longest = current
      }
      
    } else {
        current = current.slice(current.indexOf(s[i]) + 1) + s[i]
    }
    console.log(`current = ${current}`)
    console.log(`currentLength = ${current.length}`)
    console.log(`longest = ${longest}`)
    console.log(`longestLength = ${longest.length}`)
  }
  return longest.length
};

console.log(lengthOfLongestSubstring('abcabcbb'), 3)
console.log(lengthOfLongestSubstring('bbbbb'), 1)
console.log(lengthOfLongestSubstring('pwwkew'), 3)