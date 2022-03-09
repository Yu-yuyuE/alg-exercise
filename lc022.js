/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];

  function recursion(item, path, numL, numR) {
    path += item
    if(item === '(') {
      numL++
    } else if(item === ')') {
      numR++
    };

    if(numL + numR >= 2*n){
      res.push(path);
      return;
    } 
    if(numL >= n) {
      recursion(')', path, numL, numR)
      return
    }
    if(numL === numR) {
      recursion('(', path, numL, numR)
      return
    } 

    recursion('(', path, numL, numR)
    recursion(')', path, numL, numR)
  }

  recursion('(', '', 0, 0)

  return res
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));