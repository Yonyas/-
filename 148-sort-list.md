## 문제

연결리스트를 O(n log n)에 정렬하라.

## 풀이

- 퀵정렬은 최악의 경우가 있으니 안전한 병합정렬을 택했다.
- 병합정렬을 하려면 리스트의 길이를 이용해 리스트를 반으로 쪼개야 한다. 연결리스트의 경우 길이를 알 수 없기 때문에 어떻게 해야하나 찾아봤는데 런너기법을 활용하면 된다!
- 병합정렬과 런너기법을 알고 있어서 푸는 것은 그렇게 크게는 어렵지 않았지만 처음에 문제를 봤을 때는 좀 막막했다.

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
const sortList = function (head) {
  if (head == null || head.next == null) return head;

  const [list1, list2] = split(head);

  const left = sortList(list1);
  const right = sortList(list2);

  return merge(left, right);
};

const split = (head) => {
  let slow = head;
  let fast = head;
  let half = null;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    half = slow;
    slow = slow.next;
  }
  half.next = null;
  return [head, slow];
};

const merge = (list1, list2) => {
  let temp = new ListNode(null);
  let head = temp;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  if (list1 != null) {
    temp.next = list1;
  }
  if (list2 != null) {
    temp.next = list2;
  }

  return head.next;
};
```

## 출처

[Leetcode 148](https://leetcode.com/problems/sort-list/description/) (Medium): Sort List
