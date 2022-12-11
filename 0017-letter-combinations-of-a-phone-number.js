// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
*/
// var letterCombinations = function(digits) {
  
//   // map digits to letters
//   let nums = {
//     '2': ['a','b','c'],
//     '3': ['d','e','f'],
//     '4': ['g','h','i'],
//     '5': ['j','k','l'],
//     '6': ['m','n','o'],
//     '7': ['p','q','r','s'],
//     '8': ['t','u','v'],
//     '9': ['w','x','y','z']
//   }

//   // declare empty array to hold all combincations of strings
//   let result = []

//   // if no digits, return empty array
//   if (digits.length === 0) return []

//   // depth first search approach
//   // need current position in string digits & current string being built
//   const depthFirstSearch = (position, string) => {
//     // if we have a current string as long as the digits string push completed string to results array
//     if (position === digits.length) {
//       result.push(string)
//     // otherwise keep building current string
//     // look up chars that match current position
//     // then call new recursive functions down each of those paths
//     } else {
//       let letters = nums[digits[position]]
//       for (let i = 0; i < letters.length; i++) {
//         depthFirstSearch(position + 1, string + letters[i])
//       }
//     }
//   }
//   depthFirstSearch(0,'')
//   return result
// };


const letterCombinations = function(digits) {

  let map = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  }

  let res = []

  if (digits.length === 0) return []

  const dfs = (pos, str) => {
    if (pos === digits.length) {
      res.push(str)
    } else {
      let letters = map[digits[pos]]
      for (let i = 0; i < letters.length; i++) {
        dfs(pos + 1, str + letters[i])
      }
    }
  }
  dfs(0,'')
  return res
}

console.log(letterCombinations('23'), ["ad","ae","af","bd","be","bf","cd","ce","cf"])
console.log(letterCombinations(''), [])
console.log(letterCombinations('2'), ["a","b","c"])