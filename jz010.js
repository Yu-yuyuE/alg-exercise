/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n < 2) return n;
  let n0 = 0;
  let n1 = 1;
  let res = 0;
  for(let i = 2; i <= n; i++) {
    res = n0 + n1
    n0 = n1
    n1 = res
  }

  return res
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(5));