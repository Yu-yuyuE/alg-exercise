// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

function zigzagLevelOrder (root) {
  let res = []
  function recurse(root, depth) {
    if(!root) return
    res[depth] = res[depth] || []
    if(depth % 2 === 0){
      res[depth].push(root.val)
    }else{
      res[depth].unshift(root.val)
    }
    recurse(root.left, depth + 1)
    recurse(root.right, depth + 1)
  }

  recurse(root, 0)
  return res
}