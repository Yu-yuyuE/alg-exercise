/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
  const dp = (x, y) => {
    if (x == 0 && y == 0) return 1;
    if (x < 0 || y < 0) return 0;
    if (memo[x][y] > 0) return memo[x][y];
    // 状态转移方程：到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
    return (memo[x][y] = dp(x - 1, y) + dp(x, y - 1));
  };
  return dp(m - 1, n - 1);
};

var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // base case
      if (i == 0 || j == 0) dp[i][j] = 1;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

