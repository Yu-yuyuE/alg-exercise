/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let res = 0;
  let area = 0
  let m = grid.length;
  if(m === 0) return 0;
  let n = grid[0].length;

  function dfs(arr,m,n) {
    if(!arr[m] || !arr[m][n] || arr[m][n] === 0) return
    arr[m][n] = 0
    area++
    dfs(arr,m-1,n)
    dfs(arr,m,n-1)
    dfs(arr,m+1,n)
    dfs(arr,m,n+1)
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 1){
        area = 0
        dfs(grid,i,j)
        res = Math.max(res,area)
      }
    }
  }

  return res
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));
console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));