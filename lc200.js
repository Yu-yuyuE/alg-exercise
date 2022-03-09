/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let res = 0;
  if(grid.length === 0) return 0;
  let m = grid.length;
  let n = grid[0].length;
  function toZero(arr,m,n) {
    if (!arr[m] || !arr[m][n] || arr[m][n] === '0') return
    arr[m][n] = '0'
    toZero(arr,m-1,n)
    toZero(arr,m,n-1)
    toZero(arr,m+1,n)
    toZero(arr,m,n+1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res ++
        toZero(grid,i,j)
      }
    }
  }

  return res
};

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))