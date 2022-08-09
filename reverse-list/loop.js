function reverseList(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    let tail = head;
    let next = tail.next;
    while (next) {
        const after = next.next;
        next.next = tail; // 翻转
        tail = next; // 向后移动tail和next
        next = after;
    }
    head.next = null;
    return tail;
}
