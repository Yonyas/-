## 문제

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

## 풀이

- 처음엔 k번 이상 나오는 수를 구하는 건 줄 알고 풀었다;;
- counter를 reduce로 만들지 말고 map으로 만들면 얼마나 시간이 단축될까?
- 비슷하다;; 더 느릴 때도 있었다. reduce코드는 60ms, map코드는 62ms
- 아래 풀이에 map으로 만든 코드를 추가했다.

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counter = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] !== undefined ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  //sort
  const sortedCounter = Object.entries(counter).sort((a, b) => b[1] - a[1]);

  const res = [];
  let temp = 0;

  while (temp < k) {
    res.push(sortedCounter[temp][0]);
    temp++;
  }

  return res;
};
```

## 풀이 - map 사용

```js
var topKFrequent = function (nums, k) {
  const counter = new Map();
  nums.forEach((n) => counter.set(n, counter.get(n) ? counter.get(n) + 1 : 1));

  //sort
  const sortedCounter = [...counter.entries()].sort((a, b) => b[1] - a[1]);

  const res = [];
  let temp = 0;

  while (temp < k && sortedCounter[temp]) {
    res.push(sortedCounter[temp][0]);
    temp++;
  }

  return res;
};
```

## 출처

리트코드 347번 문제(medium)
https://leetcode.com/problems/top-k-frequent-elements/description/
