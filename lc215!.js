/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function dfs(nums, start, end) {
        let i = start
        let j = end
        let flag = nums[start]

        while (i < j) {
            while(i < j && nums[j] <= flag) {
                j--;
            }
            while(i < j && nums[i] >= flag) {
                i++;
            }
            if(i < j){
                let val = nums[i];
                nums[i] = nums[j];
                nums[j] = val;
            }
        }
        nums[start] = nums[i];
        nums[i] = flag;
        if(i === k - 1) return nums[i];
        // console.log(i);
        // console.log(nums);
        if(i > k - 1) return dfs(nums, start, i-1)
        if(i < k - 1) return dfs(nums, i+1, end)
    }

    let res = dfs(nums, 0, nums.length - 1)

    return res;
};

// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([5,2,4,1,3,6,0], 4));