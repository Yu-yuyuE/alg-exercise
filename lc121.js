/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let res = 0;
//     let buy = Infinity;
//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] < buy) {
//             buy = prices[i];
//             for(let j = i + 1; j < prices.length; j++) {
//                 if(prices[j] > buy) {
//                     res = Math.max(res, prices[j] - buy)
//                 }
//             }
//         }
//     }

//     return res;
// };

var maxProfit = function(prices) {
    let res = 0;
    let buy = prices[0];
    for(let i = 0; i < prices.length; i++) {
        buy = Math.min(prices[i], buy);
        res = Math.max(prices[i] - buy, res);
    }

    return res;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));