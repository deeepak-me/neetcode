/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let memmory = {}
    for(let i = 0; i<nums.length; i++){
        if(memmory[nums[i]] === undefined){
            memmory[nums[i]] = i
        }else{
            return true
        }
    }
    return false
};