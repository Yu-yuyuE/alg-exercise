// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

/**
 * @param {number[][]} grid
 * @return {number}
 */
//暴力递归，超时了
// var minPathSum = function(grid) {
//   let min = Infinity;
//   function recurse (grid, m , n, sum) {
//     if(m >= grid.length || n >= grid[0].length) {
//       return
//     }
//     sum += grid[m][n]
//     if(m === grid.length - 1 && n === grid[0].length - 1) {
//       min = Math.min(min, sum)
//       return
//     }
//     recurse(grid, m+1, n, sum)
//     recurse(grid, m, n+1, sum)
//   }

//   recurse(grid, 0, 0, 0)
//   return min
// };

//动态规划
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m).fill([]);
  dp[0][0] = grid[0][0];

  for(let i = 0; i < m; i++){
    for (let j = 0; j < n; j++) {
      if(i === 0 && j === 0){
        dp[i][j] = grid[i][j];
      }else if(i === 0) {
        dp[i][j] = dp[i][j-1] + grid[i][j]
      }else if(j === 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j]
      }else{
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
      }
    }
  }

  return dp[m-1][n-1]
};

// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
// console.log(minPathSum([[1,2,3],[4,5,6]]));
console.log(minPathSum([[0]]));