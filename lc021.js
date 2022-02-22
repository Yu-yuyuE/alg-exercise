/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     let head = new ListNode();
//     let p = head;
//     while(list1 && list2) {
//         if(list1.val < list2.val) {
//             p.next = list1
//             list1 = list1.next;
//         } else {
//             p.next = list2;
//             list2 = list2.next;
//         }
//         p = p.next;
//     }
//     if(!list1) p.next = list2;
//     if(!list2) p.next = list1;
//     return head.next;
// };

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let p = head;
    function dfs (root, p){
        if(!list1 || !list2) {
            if(!list1) p.next = list2;
            if(!list2) p.next = list1;
            return p
        }
        if(list1.val < list2.val) {
            p.next = list1
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        return dfs(root.next, p.next);
    }

    let p = dfs (root, head);

    return head.next
};