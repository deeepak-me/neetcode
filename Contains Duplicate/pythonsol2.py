class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        lookup = set()
        for i, num in enumerate(nums):
            if num in lookup:
                return True;
            lookup.add(num)
        return False;