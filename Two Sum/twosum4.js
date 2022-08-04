/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lookUp = {}
    for (let i = 0; i < nums.length; i++) {
        if (lookUp[target - nums[i]] != undefined) {
            return [lookUp[target - nums[i]], i];
        } else {
            lookUp[nums[i]] = i
        }
    }
};