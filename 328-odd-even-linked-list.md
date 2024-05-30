## 문제

- 한 개의 linked list가 주어진다.
- 홀수 번째(첫 번째와 세 번째와 다섯 번째...) 노드들을 묶어서 앞에 놓고, 짝수 번째(두 번째와 네 번째와 여섯 번째...) 노드들을 묶어서 뒤에 놓는다.
- 예를 들어 2-3-4-5의 linked list가 있다면 2-4-3-5가 리턴되어야 한다.

## 풀이

- odd, even 두 개의 변수에 각각 첫 번째와 두 번째의 노드를 할당한다.
- while문을 돌며 node의 다음 다음번째를 붙여 나간다.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  if (head == null) return head;

  //init
  let odd = head;
  let even = head?.next;
  const evenHead = head?.next;

  while (odd !== null && even !== null && even?.next !== null) {
    odd.next = odd?.next?.next;
    even.next = even?.next?.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
```

## 출처

리트코드 328번 문제
https://leetcode.com/problems/odd-even-linked-list/description/
