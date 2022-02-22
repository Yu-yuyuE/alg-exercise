/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    function dfs (root) {
        if(!root) {
            return
        }
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }

    dfs(root)
    return res
};