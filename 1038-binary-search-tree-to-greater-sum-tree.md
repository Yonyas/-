## 내 풀이

- 처음에 node.right를 훑고 그 다음에 node를 훑고 그 다음에 node.left를 훑는 순서
- 훑으면서 acc를 누적해나간다.

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
 * @return {TreeNode}
 */
const bstToGst = function (root) {
  let acc = 0;

  const rec = (root) => {
    if (root == null) return;

    rec(root.right);

    let temp = acc;
    acc += root.val;
    root.val += temp;

    rec(root.left);
  };
  rec(root);

  return root;
};
```

## 출처

[Leetcode 1083](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/) (Medium): Binary Search Tree to Greater Sum Tree
