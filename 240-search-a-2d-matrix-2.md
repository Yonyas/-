## 문제

m \* n 행렬에서 값을 찾아내는 효율적인 알고리즘을 구현하라. 행렬은 왼쪽에서 오른쪽, 위에서 아래 오름차순으로 정렬되어 있다.

#### Example 1:

Input: matrix = \[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true

## 풀이

- 브루트 포스로 풀기는 좀 그렇고 다른 풀이 방법을 생각해봤는데 떠오르지가 않아서 다른 사람의 풀이를 보고 방법을 인지한 후 풀었다..
- row 끝에서부터 찾는 방법이 참 신박하다.

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let row = matrix[0].length - 1;
  let column = 0;

  while (row >= 0 && column < matrix.length) {
    if (matrix[column][row] < target) {
      column += 1;
    } else if (matrix[column][row] > target) {
      row -= 1;
    } else if (matrix[column][row] === target) {
      return true;
    }
  }

  return false;
};
```

## 출처

[Leetcode 240](https://leetcode.com/problems/search-a-2d-matrix-ii/description/) (Medium) : Search a 2D Matrix 2
