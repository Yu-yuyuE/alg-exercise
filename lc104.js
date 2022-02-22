var maxDepth = function(root) {
    let res = 0;
    function dfs (root, depth) {
        if(!root) {
            res = Math.max(res,depth)
            return
        }
        depth++
        dfs(root.left, depth)
        dfs(root.right, depth)
        depth--
    }

    dfs(root, 0)

    return res
};