// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

// 思路：中序遍历，第K个被遍历的节点就是第K小
// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 
// 它的左、右子树也分别为二叉排序树。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let res = 0;
  function recurse (root) {
    if(!root) return;

    recurse(root.left);
    k--;
    if(k===0) return res = root.val;
    recurse (root.right);
  }

  recurse (root, k)

  return res;
};

console.log(kthSmallest());