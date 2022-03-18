// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverse(a , b) {
  let prev = null
  let current = a
  while(current != b) {
    let next = head.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

var reverseKGroup = function(head, k) {
  if(head == null) return head;
  let a = head, b = head;
  for(let i = 0; !!b == true; i++){
    if(b === null){
      return head;
    }else{
      b = b.next
    }
  }
  // 反转前 k 个元素
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};




/*
// 反转区间 [a, b) 的元素，注意是左闭右开
const reverse = (a, b) => {
  let pre, cur, nxt;
  cur = a;
  while (cur != b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  // 返回反转后的头结点
  return pre;
};

var reverseKGroup = function (head, k) {
  if (head == null) {
    return head;
  }
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    // 不足 k 个，不需要反转，base case
    if (b == null) {
      return head;
    } else {
      b = b.next;
    }
  }
  // 反转前 k 个元素
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};

*/
