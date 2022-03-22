// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

// 示例 2：
// 输入：head = [1], n = 1
// 输出：[]

// 示例 3：
// 输入：head = [1,2], n = 1
// 输出：[1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let a = head;
  let b = head;

  for (let i = 0; i < n; i++) {
    a = a.next
  }

  if (a == null) {
    // 如果此时快指针走到头了，
    // 说明倒数第 n 个节点就是第一个节点(举例来说，head = [1],n = 1 删除倒数第1个节点，应该返回[] 所以下面返回的是head.next)
    return head.next;
  }

  while (a && a.next){
    a = a.next;
    b = b.next;
  }

  b.next = b.next.next;

  return head;
};