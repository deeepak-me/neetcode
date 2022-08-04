class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        lookup = {}
        for i, num in enumerate(nums):
            if num in lookup:
                return True;
            lookup[num] = i
        return False;