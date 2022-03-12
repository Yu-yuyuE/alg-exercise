/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 暴力法超时了。。
// var findLength = function(nums1, nums2) {
//   let res = 0;
//   let path = [];
//   for(let i =0; i < nums1.length; i++) {
//     for(let j = 0; j < nums2.length; j++) {
//       if(nums1[i] !== nums2[j]) continue;
//       let n = 0
//       while(nums1[i+n] === nums2[j+n] && i + n < nums1.length && j + n < nums2.length){
//         path.push(nums1[i+n])
//         n++
//       }
//       if(res < path.length) res = path.length
//       path.length = 0
//     }
//   }

//   return res
// };

// 动态规划
var findLength = function(nums1, nums2) {
  const [m,n] = [nums1.length, nums2.length];
  const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));

  console.log(dp);
  
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          // 遇到A[i - 1] === B[j - 1]，则更新dp数组
          dp[i][j] = nums1[i - 1] === nums2[j - 1] ? dp[i-1][j - 1] + 1 : dp[i][j - 1];
      }
  }

  console.log(dp);

  return dp[m][n]
};

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]));
// console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));