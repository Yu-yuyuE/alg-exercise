/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = [];
  function dfs (root) {
    if(!root) return
    res.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }

  dfs(root)

  return res
};