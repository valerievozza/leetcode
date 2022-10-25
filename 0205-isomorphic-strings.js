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

console.log(isIsomorphic("egg", "add"), true)

console.log(isIsomorphic("foo", "bar"), false)
console.log(isIsomorphic("paper", "title"), true)