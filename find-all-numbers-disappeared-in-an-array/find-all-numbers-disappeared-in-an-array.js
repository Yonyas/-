/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    return Array(nums.length).fill().map((_,i) => i+1).filter(v => nums.indexOf(v) == -1)

};