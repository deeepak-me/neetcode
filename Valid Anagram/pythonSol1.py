class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        counters , countert = {},{}
        for i in range(len(s)):
            counters[s[i]] = 1 + counters.get(s[i], 0)
            countert[t[i]] = 1 + countert.get(t[i], 0)
        return counters == countert