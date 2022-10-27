/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  let mapS = {}
  let mapT = {}
  let isoMap = {}
  
  for (let i = 0; i < s.length; i++) {
      if (!mapS[s[i]]) {
          mapS[s[i]] = 1
      } else {
          mapS[s[i]] ++
      }
      console.log(`Loop ${i}: mapS ${JSON.stringify(mapS)}`)
  }
    
    for (let j = 0; j < t.length; j++) {
        if (!mapT[t[j]]) {
            mapT[t[j]] = 1
        } else {
            mapT[t[j]] ++
        }
        console.log(`Loop ${j}: mapT ${JSON.stringify(mapT)}`)
    }
    
    for (charS in mapS) {
        for (charT in mapT) {
            if (mapS[charS] === mapT[charT]) {
                isoMap[charS] = charT
                console.log(`isoMap: ${JSON.stringify(isoMap)}`)
                delete mapS[charS]
                console.log(`mapS: ${JSON.stringify(mapS)}`)
                delete mapT[charT]
                console.log(`mapT: ${JSON.stringify(mapT)}`)
            } 
        }
    }
    return Object.keys(mapS).length === 0 && Object.keys(mapT).length === 0
};

// Another solution with comments

function isIsometric(s, t) {
    // if strings are not equal in length, they are not isometric
    if (s.length !== t.length) {
      return false
    }
  
    // declare objects to store key & value pairs for chars in s and t
    let sMap = {}
    let tMap = {}
  
    // loop through chars of s
    for (let i = 0; i < s.length; i++) {
      // assign current char of s to sChar variable
      let sChar = s[i]
      // assign current char of t to tChar variable
      let tChar = t[i]
  
      // check the following criteria
  
      // if sChar is not a property of sMap
      if (!sMap[sChar]) {
        // assign the property sChar in sMap a value of tChar
        // this means sChar has a corresponding tChar
        sMap[sChar] = tChar
      }
      // do the same for tChar in tMap
      // if tChar is not a property of tMap
      if (!tMap[tChar]) {
        // assign the property sChar in sMap a value of tChar
        // this means sChar has a corresponding tChar
        tMap[tChar] = sChar
      }
      // if sChar in sMap does not match the existing value of tChar OR
      // if tChar in tMap does not match the existing value of sChar
      if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
        // return false
        return false
      }
    }
    // 
    return true
  }

console.log(isIsomorphic("egg", "add"), true)

console.log(isIsomorphic("foo", "bar"), false)
console.log(isIsomorphic("paper", "title"), true)