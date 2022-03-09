/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function dfs (root) {
    if(!root) return
    let node = root.left;
    root.left = root.right;
    root.right = node;
    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);
  return root
};