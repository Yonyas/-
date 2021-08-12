/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = {};
    for (let i=0; i<nums.length; i++) {
      (nums[i] in counter) ? counter[nums[i]]++ : counter[nums[i]] = 1;
    }
  
    let max = 0;
    let maxI = 0;
    Object.entries(counter).map((v,i) => {
      if (v[1] > max) {
        max = v[1];
        maxI = i;
        console.log(max)
    }})
    return Number(Object.entries(counter)[maxI][0])
};
