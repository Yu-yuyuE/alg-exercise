// 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

// 暴力解法，超时了
// var lastRemaining = function(n, m) {
//   let res;
//   let index = 0;
//   let arr = new Array();
//   for(let i = 0; i < n; i++) {
//     arr.push(i)
//   }
//   function recurse (arr, m) {
//     if(arr.length === 1) {
//       res = arr[0]
//       return
//     } 
//     index += m - 1;
//     while(index >= arr.length) {
//       index -= arr.length
//     }
//     arr.splice(index, 1)

//     recurse(arr, m)
//   }

//   recurse(arr, m)
//   return res
// };

//反推法，求出最后一位在n数列中的位置
var lastRemaining = function(n, m) {
  let res = 0; //只剩最后一位I时，index当然为0

  for(let i = 2; i <= n; i++) {
    res = (res + m) % i //从总数两个开始遍历，求出每次删除数字时，最后一位I的所在index
  }
  return res;
};

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
