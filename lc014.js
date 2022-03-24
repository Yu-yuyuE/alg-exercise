// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  let len = strs.length
  let subLen = strs[0].length
  if(len === 1) res = strs[0]
  if(subLen === 0) res = ''
  for(let i = 0; i < subLen; i++) {
    for(let j = 1; j < len; j++) {
      if(strs[j][i] !== strs[j-1][i]){
        return res
      }
      if(j === len - 1) res += strs[j][i]
    }
  }
  return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));