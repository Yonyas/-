## 문제

이진 탐색 트리의 루트 노드와 low, high 두 정수가 주어지면, 포함 범위 [low, high]의 값을 가진 모든 노드의 값의 합을 반환하라

## 내 풀이

- 재귀, DFS로 풀었다.
- Runtime Beats 50%라 효율적이지 않다.
- 다른 방법을 알아보자

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function (root, low, high) {
  if (root == null) return 0;

  const left = rangeSumBST(root.left, low, high);
  const right = rangeSumBST(root.right, low, high);
  const rootVal = root.val < low || root.val > high ? 0 : root.val;

  return left + right + rootVal;
};
```

## 힌트 얻고 푼 풀이

- 이진탐색트리로 주어졌으니 정렬이 되어 있는 상태라 모든 노드를 훑을 필요는 없다.
- 그래서 노드의 값을 확인해서 재귀를 돌지 말지 결정할 수 있도록 조건을 넣어줬다.
- Beats 80%!

```js
const rangeSumBST = function (root, low, high) {
  if (root == null) return 0;

  const left = root.val > low ? rangeSumBST(root.left, low, high) : 0;
  const right = root.val < high ? rangeSumBST(root.right, low, high) : 0;
  const rootVal = root.val < low || root.val > high ? 0 : root.val;

  return left + right + rootVal;
};
```

## 출처

[Leetcode 938](https://leetcode.com/problems/range-sum-of-bst/) (Easy): Range Sum of BST
