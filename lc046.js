/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let records = {};
  let res = [];
  function dfs (arr) {
    if(arr.length >= nums.length){
      res.push(Array.from(arr));
      return;
    }
    for(let i = 0; i < nums.length; i++) {
      if(records[nums[i]]) continue
      arr.push(nums[i]);
      records[nums[i]] = true;
      dfs(arr);
      arr.pop();
      records[nums[i]] = false;
    }
  }
  dfs([]);
  return res
};

console.log(permute([1,2,3]));