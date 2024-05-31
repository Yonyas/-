## 풀이

- Time Limit Exceeded 떴다.

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const res = [];
  for (let i = 0; i < temperatures.length - 1; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        res.push(j - i);
        break;
      } else if (j === temperatures.length - 1) {
        res.push(0);
      }
    }
  }
  res.push(0);
  return res;
};
```

## 풀이 2

- stack에 인덱스를 하나씩 쌓는다.
- for문을 돌면서 current temperature와 stack의 마지막 아이템을 비교해서 온도가 높아졌다면 res의 해당 인덱스에 값을 넣어준다.

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const stack = [];
  const res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack && temperatures[stack.at(-1)] < temperatures[i]) {
      res[stack.at(-1)] = i - stack.at(-1);
      stack.pop();
    }
    stack.push(i);
  }

  return res;
};
```

## 출처

리트코드 739번 문제(Medium)
https://leetcode.com/problems/daily-temperatures/description/
