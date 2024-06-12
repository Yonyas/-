## 풀이 1 - 틀림

- 처음에 문제를 잘못 이해해서 잘못 풀었다.
- 처음엔 모든 리프노드의 높이 중 가장 큰 값과 작은 값을 비교해서 그 차가 1보다 작거나 같아야 한다고 생각했다.
- 그게 아니라 한 노드의 자식 노드들의 height, 즉 node.left, node.right의 height의 차가 1보다 작거나 같아야 했다.

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
 * @return {boolean}
 */
const isBalanced = function (root) {
  let minHeight = Infinity;
  let maxHeight = 0;

  const search = (root, height) => {
    if (root == null) {
      if (height - 1 >= maxHeight) maxHeight = height - 1;
      if (height - 1 < minHeight) minHeight = height - 1;
      return;
    } else {
      let newHeight = height + 1;
      search(root.left, newHeight);
      search(root.right, newHeight);
    }
  };

  search(root, 0);
  return maxHeight - minHeight <= 1;
};
```

## 풀이 2 - 맞음

```js
const isBalanced = function (root) {
  const check = (root) => {
    if (root == null) return 0;

    const left = check(root.left);
    const right = check(root.right);

    if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  };

  return check(root) != -1;
};
```

## 출처

[Leetcode 110](https://leetcode.com/problems/balanced-binary-tree/description/) (Easy): Balanced Binary Tree
