// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

/**
 * @param {string} s
 * @return {string[]}
 */
//关于回溯：需要遍历可能性的，就一定要回溯；只是单线的递归不需要回溯
var restoreIpAddresses = function(s) {
  let res = [];
  function recurse (path, l) {
    if(path.length === 4 && l > s.length-1) {
      res.push(path.join('.'))
      return
    }
    if(path.length === 4 && l < s.length) {
      return
    }
    
    for(let i = 1; i <= 3; i++){
      if(l + i > s.length) return
      if(s[l] === '0' && i > 1) return

      if(Number(s.substring(l, l + i)) > 255) return

      path.push(s.substring(l, l + i))
      recurse(path, l+i)
      path.pop()
    }
  }

  recurse([], 0)

  return res
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
console.log(restoreIpAddresses("255255111135"));