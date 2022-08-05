/**
 * @param {number[]} nums
 * @return {boolean}
 */

// using set()
var containsDuplicate = function(nums) {
    const memory = new Set()
    for (const i of nums) {
        if (memory.has(i)) {
            return true;
        }
        memory.add(i);
    }
    return false
};