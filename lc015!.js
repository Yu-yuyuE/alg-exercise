/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums = nums.sort((a, b) => b - a);
  let res = [];
  if (nums.length < 3) {
    return res;
  }
  for (let i = 0; i < nums.length - 2; i++){
    let l = i + 1;
    while(l < nums.length - 1){
      let otherNums = nums.slice(l+1, nums.length);
      if(otherNums.indexOf(-(nums[i] + nums[l])) !== -1){
        res.push([nums[i], nums[l], nums[l + otherNums.indexOf(-(nums[i] + nums[l])) + 1]])
      }
      l++;
    }
  }
  return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));