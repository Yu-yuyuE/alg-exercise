/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(i - coins[j] >= 0){
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};

// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
console.log(coinChange([186,419,83,408], 6249));