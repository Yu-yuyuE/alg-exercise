/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let dp = Array(n+1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n+1; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
  }

  return dp[n]
};