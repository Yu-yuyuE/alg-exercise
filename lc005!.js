/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let i = 0;
  let res = '';
  while (i < s.length) {
    let l = r = i;
    while(l > 0 && s[l - 1] === s[i]){
      l--
    }
    while(r < s.length - 1 && s[r + 1] === s[i]){
      r++
    }
    while(l > 0 && r < s.length - 1 && s[r + 1] === s[l - 1]){
      l--
      r++
    }
    if(res.length < r - l + 1){
      res = s.substring(l, r+1)
    }
    i++;
  }
  return res;
};