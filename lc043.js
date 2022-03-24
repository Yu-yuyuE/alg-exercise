// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var plus = function (num1, num2) {
  let res = "";
  let extra = 0;
  let m = num1.length;
  let n = num2.length;
  if(m > n) num2.padStart(m,'0');
  if(n > m) num1.padStart(n,'0');
  while(m >= 0) {
    let sum = (Number(num1[m]) + Number(num2[n]) + extra)%10;
    extra = Math.floor((Number(num1[m]) + Number(num2[n]) + extra)/10)
    res = `${sum}${res}`
    n--;
    m--;
  }
  return res = `${extra}${res}`
}

var multiply = function(num1, num2) {
  let res = '';
  let m = num1.length;
  let n = num2.length;
  for (let i = m-1; i >= 0; i--) {
    for (let j = n-1; j >= 0; j--) {
      let mulRes = `${Number(num1[i]) * Number(num2[j])}${''.padEnd(m+n-i-j-2,'0')}`
      res = plus(res, mulRes)
    }
  }

  return res;
};

console.log(multiply('1','2'));
console.log(multiply('10','5'));
console.log(multiply('17','25'));