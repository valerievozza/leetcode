// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

// a string containing only parens, brackets, and/or curly braces
// all all occur in pairs, return true
// if pairs are mismatched, return false

//

function isValid(s) {
  // declare empty temp array to hold open brackets so you can see if they correspond to the current bracket you're checking
  const temp = []
  // create map of matching bracket pairs
  const bracketPairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  // loop through s
  for (let i = 0; i < s.length; i++) {
    // if char is an opening bracket, add to temp
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      temp.push(s[i])
      // if not, remove last char from temp and see if it's the corresponding opening bracket to this closing bracket
      // if not return false
    } else if (bracketPairs[temp.pop()] !== s[i]) {
      return false
    }
  }

  // after looping through array, check if temp is empty
  if (temp.length > 0) {
    // if not, then not all brackets were matching pairs, return false
    return false
    // if yes, all brackets had a match, return true
  } else {
    return true
  }
}












console.log(isValid('()'), 'CORRECT ANSWER:', true)
console.log(isValid('()[]{}'), 'CORRECT ANSWER:', true)
console.log(isValid('(]'), 'CORRECT ANSWER:', false)
console.log(isValid('()[]{}()[]{}()[]{}()[]{}]'), 'CORRECT ANSWER:', false)