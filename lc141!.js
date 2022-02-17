/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
// var hasCycle = function(head) {
//     let fast = head
//     let slow = head
//     while(fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//         if(fast === slow) {
//             return true
//         }
//     }
//     return false;
// };

// JSON.stringify()中出现循环引用会报错
var hasCycle = function(head) {
    try{
        JSON.stringify(head)
    }catch{
        return true;
    }
    return false;
};

// hash表
var hasCycle = function(head) {
    let map = new Map();
    while (head) {
        if (map.has(head)) return true;//如果当前节点在map中存在就说明有环
        map.set(head, true);//否则就加入map
        head = head.next;//迭代节点
    }
    return false;//循环完成发现没有重复节点，说明没环
};
