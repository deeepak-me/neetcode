/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const freq = [];
    const res = [];

    for (let num of nums) {
        if (map[num] === undefined) {
            map[num] = 1
        } else { map[num]++ }

    }
    /*console.log(map)*/

    for (let i = 0; i <= nums.length; i++) {
        freq.push([])
    }
    for (let c in map) {
        freq[map[c]].push(c)
    }

    /*console.log(freq)*/

    for (let i = freq.length - 1; i >= 0; i--) {
        if (freq[i].length > 0) {
            freq[i].forEach((elem) => res.push(elem));
            if (res.length === k) {
                return res
            }
        }
    }

};