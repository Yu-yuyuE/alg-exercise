/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    
    function dfs(root, depth) {
        if(!root) return
        if(!res[depth]) res[depth] = [];
        res[depth].push(root.val)
        if(root.left) dfs(root.left, depth+1)
        if(root.right) dfs(root.right, depth+1)
        if(!root.left && !root.right){
            return
        }
    }

    dfs(root, 0)
    return res
};