/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    const sCount = {}
    const tCount = {}
    for (let i = 0; i < s.length; i++) {
        if (!sCount[s[i]]) {
            sCount[s[i]] = 0
        }
        sCount[s[i]]++
            if (!tCount[t[i]]) {
                tCount[t[i]] = 0
            }
        tCount[t[i]]++
    }
    for (let c in sCount) {
        if (sCount[c] !== tCount[c]) {
            return false
        }
    }
    return true
};