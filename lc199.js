/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let res = [];
  function dfs (root, depth) {
    if(!root) return
    res[depth] = root.val
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }

  dfs(root, 0);
  return res
};