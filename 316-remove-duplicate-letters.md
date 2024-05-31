## 풀이 - 재귀

- 혼자서는 못 풀었다. 다른 풀이를 보고 이해하는 데에도 오래 걸렸다.
- unique 변수에는 s의 중복을 제거하고 sort 한 값을 담는다.
- unique의 문자를 하나씩 잡고 for문을 돌리는데 for문 안에 재귀가 있지만 조건에 맞게 되면 return하기 때문에 해당 함수가 끝나게 된다. 그래서 조건 반환 이후에 for문은 돌지 않기 때문에 신경 안써도 된다.

```js
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  if (s.length <= 1) return s;

  const unique = new Set(s.split("").sort());

  for (char of unique) {
    let suffix = s.slice(s.indexOf(char));

    if (
      Array.from(new Set(suffix)).sort().join("") ==
      Array.from(new Set(s)).sort().join("")
    ) {
      const remaining = suffix
        .split("")
        .filter((v) => v !== char)
        .join("");
      return char + removeDuplicateLetters(remaining);
    }
  }
};
```

## 풀이 - 스택

- 첫 문자부터 for문을 돈다.
- char이 기존에 있는 stack의 끝 값보다 작고, stack의 끝 값이 char 뒤에도 또 나온다면 stack의 끝 값은 없애도 되고 대신 char를 stack에 추가한다.

```js
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  const counter = s.split("").reduce((acc, cur) => {
    acc[cur] != undefined ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});
  const stack = [];

  for (char of s) {
    counter[char] -= 1;

    if (stack.includes(char)) continue;
    while (stack && char < stack.at(-1) && counter[stack.at(-1)] > 0) {
      stack.pop();
    }

    stack.push(char);
  }
  return stack.join("");
};
```

## 출처

리트코드 316번 문제
