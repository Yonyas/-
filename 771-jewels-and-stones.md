## 풀이

- 파이썬의 collections.Counter가 자바스크립트에도 필요하다..!!

```js
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
  const counter = stones.split("").reduce((acc, cur) => {
    acc[cur] == undefined ? (acc[cur] = 1) : (acc[cur] += 1);
    return acc;
  }, {});

  let res = 0;
  for (jewel of jewels.split("")) {
    res += counter[jewel] ?? 0;
  }
  return res;
};
```

## 출처

리트코드 771번 문제(easy)
https://leetcode.com/problems/jewels-and-stones/submissions/1274017301/
