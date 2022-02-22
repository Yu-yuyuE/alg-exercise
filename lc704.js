/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     function dfs(nums, target, start, end) {
//         if(start === end && nums[start] !== target) return -1
//         let index = Math.floor((start + end) / 2);
//         if(nums[index] === target) return index;
//         if(nums[index] > target){
//             return dfs(nums, target, start, index - 1)
//         }
//         if(nums[index] < target) {
//             return dfs(nums, target, index + 1, end)
//         }
//     }

//     return dfs(nums, target, 0, nums.length - 1)
// };

var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let index = l + Math.floor((r - l) / 2);
    while(nums[index] !== target && l < r) {
        if(nums[index] < target){
            l = index + 1;
        }else{
            r = index - 1;
        }
        index = l + Math.floor((r - l) / 2);
    }
    return nums[index] === target ? index : -1
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));