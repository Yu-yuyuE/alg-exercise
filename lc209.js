/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let res = Infinity
  let sum = 0

  let l = 0
  let r = 0

  while(r < nums.length){
      sum += nums[r]
      r++
      while(sum >= target){
          res = Math.min(res,r-l)
          sum -= nums[l]
          l++
      }
  }

  return res > nums.length?0:res

};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));