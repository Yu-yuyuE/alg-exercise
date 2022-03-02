/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head
    let slow = head
    for (let i = 0; i < k; i++) {
        if(!fast) return false
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next
    }
    return slow
};