/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const numLen = nums.length;
  for (let i=0; i<numLen; i++) {
    if (nums[i] === 0) nums.push(0);
  }
  for (let i=numLen-1; i>=0; i--) {
    if (nums[i] === 0) nums.splice(i,1);
  }
  return nums
};