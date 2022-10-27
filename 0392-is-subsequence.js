// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// strings s & t
// is s a substring of t? exist in t with some or no chars removed, without rearranging the chars

function isSubsequence(s,t) {
  // if s is longer than t it cannot be a subset of t
  if (s.length > t.length) {
    return false
  }
  // if s is empty, it is a subset of t
  if (s.length === 0) {
    return true
  }
  // start counters for looping through s & t at 0
  let sCounter = 0
  let tCounter = 0

  // loop through strings
  while (tCounter < t.length) {
    // if char at current index in s is not equal to the char in current index in t
    if (s[sCounter] !== t[tCounter]) {
      // check char at current index in s against char at next index in t
      tCounter++
      // if they do match
    } else {
      // move on to the next char in each string
      tCounter++
      sCounter++
    }
    // if you're at the last index of s and the current char of s is equal to the current char of t, return true
    // don't need to keep comparing -- you've already checked that each char in s is present in t in order (though not necessarily consecutive)
    if (sCounter === s.length - 1 && s[sCounter] === t[tCounter]) {
      return true
    }
  }
  // if the above conditions are not true, return false
  return false
}

console.log(isSubsequence("abc", "ahbgdc", true))

// console.log(isSubsequence('acb', 'ahbgdc'), false)
console.log(isSubsequence('ab', 'baab'), true)