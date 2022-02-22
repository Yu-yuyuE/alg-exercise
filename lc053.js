/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let res = nums[l];
  while(l < nums.length && r < nums.length) {
    sum += nums[r];
    res = Math.max(res, sum)
    if(sum <= 0) {
      l = r
      sum = 0
    }
    r++;
  }
  return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));