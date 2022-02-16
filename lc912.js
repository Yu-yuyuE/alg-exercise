/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function dfs(nums, start, end) {
        if(start >= end) return
        let i = start
        let j = end
        let flag = nums[start]
        while(i < j){
            while(i < j && nums[j] >= flag) {
                j--;
            }
            while(i < j && nums[i] <= flag) {
                i++;
            }
            let val = nums[i]
            nums[i] = nums[j]
            nums[j] = val
        }
        nums[start] = nums[i]
        nums[i] = flag

        dfs(nums, start, i - 1)
        dfs(nums, i + 1, end)
    }

    dfs(nums, 0 , nums.length - 1)

    return nums
};

console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));