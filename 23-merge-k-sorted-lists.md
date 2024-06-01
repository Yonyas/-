## 풀이

- hard 문제인데 그~~렇게는 어렵지 않았다. 휴
- lists의 두번째 아이템부터 reduce로 돌면서 계속 합쳐나간다.
- mergeLists는 두 linked list를 인자로 받아서 val 크기대로 sort해서 머지하는 함수이다.
- heap을 사용해서 푸는 풀이가 있었는데 그건 이해를 못하겠다.

````js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**는
 * @param {ListNode[]} lists는
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    if (lists.length == 1) return lists[0];

    lists.slice(1).reduce((acc, cur) => {
        const merged =  mergeLists(acc, cur)
        return merged
    }, lists[0])

    return lists[0]
};

const mergeLists = (a,b) => {
    let temp = root = new ListNode();

    while (a != null && b != null) {
        if (a.val <= b.val) {
            temp.next = a;
            a = a.next;
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if (a != null) {
        temp.next = a;
    } else {
        temp.next = b;
    }

    return root.next;
}
```

## 출처

리트코드 23번 문제(hard)
https://leetcode.com/problems/merge-k-sorted-lists/description/
````
