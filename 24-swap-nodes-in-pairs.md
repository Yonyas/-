## 풀이 - 재귀

- 재귀는 언제 익숙해질까
- 처음에 rec 함수 리턴할 때 `return cur`를 해서 답이 틀렸었다.

```js
const swapPairs = function (head) {
  function rec(cur) {
    if (cur == null || cur?.next == null) return cur;

    let temp = cur.next.next;
    let second = cur.next;

    cur.next = temp;
    second.next = cur;

    cur.next = rec(temp);
    return second;
  }

  return rec(head);
};
```

## 출처

리트코드 24번 문제
https://leetcode.com/problems/swap-nodes-in-pairs/description/
