## 풀이

- 어려웠다.
- digits를 하나씩 돌면서 result에 담아뒀던 값이랑 합치는 풀이

```js
const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const pads = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  let result = [""];

  for (digit of digits) {
    let temp = [];

    for (c of result) {
      for (r of pads[digit]) {
        temp.push(c + r);
      }
    }
    result = temp;
  }

  return result;
};

letterCombinations("234");
```

## 출처

[리트코드 17번 문제](https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/) - Letter combinations of a phone number (Medium)
