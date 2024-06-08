## 풀이

- 543번 문제와 비슷한 문제
- 한번씩 훑으니까 시간복잡도는 O(n)

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
 * @return {number}
 */
const longestUnivaluePath = function (root) {
  let res = { count: 0 };

  const dfs = (root) => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (root.left && root.left.val == root.val) {
      left++;
    } else {
      left = 0;
    }

    if (root.right && root.right.val == root.val) {
      right++;
    } else {
      right = 0;
    }

    res.count = Math.max(left + right, res.count);
    return Math.max(left, right);
  };
  dfs(root);

  return res.count;
};
```

## 출처

[리트코드 643번 문제](https://leetcode.com/problems/longest-univalue-path/description/) (Easy): Longest Univalue Path
