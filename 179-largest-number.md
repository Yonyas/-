## 문제

항목들을 조합하여 만들 수 있는 가장 큰 수를 출력하라.

input : [10, 2]
output : '210'

## 풀이

- [0,0]일 경우가 있어서 중간에 if절을 넣어줬는데 다른 사람의 풀이를 보니까 아래와 같이 replace를 사용한다.
  `arr.join('').replace(/^0*/, '') || '0';`

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const arr = nums.sort((a, b) => {
    const before = a.toString() + b.toString();
    const after = b.toString() + a.toString();
    if (after < before) return -1;
    if (after >= before) return 1;
  });

  if (arr.every((i) => i == 0)) return "0";

  return arr.join("");
};
```

## 풀이 2

- 삽입정렬을 이용한 풀이가 있어서 풀어봤다.

```js
const largestNumber = function (nums) {
  const toSwap = (a, b) => {
    return a + "" + b > b + "" + a;
  };

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (toSwap(nums[i], nums[j])) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums.join("").replace(/^0*/, "") || "0";
};
```

## 출처

[Leetcode 179](https://leetcode.com/problems/largest-number/description/) (Medium): Largest Number
