// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */

// 维护两个数组记录遍历中出现的左右max高度
/*
var trap = function(height) {
  let res = 0;
  let leftMax = Array(height.length).fill(0);
  leftMax[0] = height[0];
  let rightMax = Array(height.length).fill(0);
  rightMax[height.length - 1] = height[height.length - 1];

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = height[i] > leftMax[i-1] ? height[i] : leftMax[i-1];
    rightMax[height.length-1-i] = height[height.length-1-i] > rightMax[height.length-i] ? height[height.length-1-i] : rightMax[height.length - i]
  }

  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
};
*/

//双指针
var trap = function(height) {
  let res = 0;
  let left = 0, right = height.length-1;
  let leftMax = 0, rightMax = 0;

  while (left < right) {
    if(height[left] > leftMax) leftMax = height[left];
    if(height[right] > rightMax) rightMax = height[right];
    res += leftMax < rightMax ? leftMax - height[left++] : rightMax - height[right--];
  }

  return res;
};

console.log(trap([4,2,0,3,2,5]));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));