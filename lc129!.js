/**
 * @param {TreeNode} root
 * @return {number}
 */

// 动态规划
var sumNumbers = function(root) {
    function dfs(root, presum) {
        if(!root) return 0;
        let sum = root.val + presum * 10

        if(!root.right && !root.left){
            return sum
        }

        return dfs(root.left, sum) + dfs(root.right, sum)
    }

    return dfs(root, 0)
};