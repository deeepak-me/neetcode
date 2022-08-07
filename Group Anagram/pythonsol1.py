class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        res = defaultdict(list) #mapping strCount to list of anagrams
        
        for s in strs:
            res["".join(sorted(s))].append(s)
        return res.values()