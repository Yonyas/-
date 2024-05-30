## 풀이 1

- 로직 생각이 안나서 무식하게라도 풀어봤다.
- left, middle, right 세 리스트로 나누고 middle을 reverse 한다.

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
  //make before, middle, after
  let beforeHead = (before = head);
  let middle;
  let middleHead;
  let after;
  let pointer = 1;

  while (pointer <= right) {
    if (left == 1) {
      before = beforeHead = null;
      middleHead = middle = head;
    } else if (pointer < left - 1) {
      before = before.next;
    } else if (pointer == left - 1) {
      middleHead = middle = before.next;
    } else if (pointer < right) {
      middle = middle.next;
    } else if (pointer == right) {
      after = middle?.next;
      middle.next = null;
    }
    pointer++;
  }

  //reverse middle
  let current = middleHead;
  let prev = null;

  while (current != null) {
    let temp = current.next;
    current.next = prev;

    prev = current;
    current = temp;
  }

  //connect
  if (before == null) {
    if (after != null) {
      middle.next = after;
    }
    return middleHead;
  } else {
    before.next = middle;
    if (after != null) {
      middle.next = after;
    }
    return head;
  }
};
```

## 풀이 2 - 좋은 풀이

- 다른 풀이를 보니 O(n)으로 깔끔하게 풀었다.
- root가 필요한 이유는 left가 1일 수도 있어서이다.

```js
const reverseBetween = function (head, left, right) {
  if (head.next == null) return head;

  //init
  let root = new ListNode();
  let start = new ListNode();
  root.next = head;
  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }
  let end = start.next;

  //reverse
  for (let i = 0; i < right - left; i++) {
    let temp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = temp;
  }

  return root.next;
};
```

## 출처

리트코드 92번 문제
https://leetcode.com/problems/reverse-linked-list-ii/description/
