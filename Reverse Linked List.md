## 풀이

- temp를 만들어서 current.next를 잠시 보관한다.
- current.next에 prev(prev는 노드가 1-2라고 했을 때 처음 while문 돌 때는 1-null, 그 다음엔 2-1-null 이렇게 된다)를 넣는다.
- prev, current를 하나씩 오른쪽으로 넘겨준다.

```js
const reverseList = function (head) {
  let current = head;
  let temp;
  let prev = null;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};
```

## 출처

리트코드 206번 문제
https://leetcode.com/problems/reverse-linked-list/
