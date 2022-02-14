/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var climbStairs = function(n) {
//     if (n < 3) return n;
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

// 迭代
var climbStairs = function(n) {
    let res = 0
    let n1 = 0
    let n2 = 1
    if (n < 3) {
        res = n;
    }else {
        for (let i = 0; i < n; i++) {
            res = n1 + n2
            n1 = n2
            n2 = res
        }
    }
    return res
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));