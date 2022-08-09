/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 let reverseNode = (head, next) => {
    let next2 = next.next; // 暂存next的下一个节点
    next.next = head; // 翻转next节点（第二个参数）
    if (next2) {
        // 如果next还有后续节点，递归翻转
        return reverseNode(next, next2);
    }
    return next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = (head) => {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    let node = reverseNode(head, head.next);
    head.next = null;
    return node;
};