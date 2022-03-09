/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function dfs(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null;
    let root = new TreeNode();
    root.val = preorder[0];
    let i = inorder.indexOf(preorder[0])
    let len = inorder.length
    
    let leftInorder = inorder.slice(0,i);
    let rightInorder = inorder.slice(i+1,len);
    let leftPreorder = preorder.slice(1,1+leftInorder.length);
    let rightPreorder = preorder.slice(1+leftInorder.length,len)
    root.left = dfs(leftPreorder,leftInorder);
    root.right = dfs(rightPreorder,rightInorder);

    return root
  }

  return dfs(preorder, inorder)
  
};