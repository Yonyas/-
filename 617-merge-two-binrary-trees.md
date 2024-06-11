## 풀이

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
const mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1) return root2;
  if (!root2) return root1;

  let node = new TreeNode((root1?.val || 0) + (root2?.val || 0));
  node.left = mergeTrees(root1?.left, root2?.left);
  node.right = mergeTrees(root1?.right, root2?.right);

  return node;
};
```

## 출처

[리트코드 617번 문제](https://leetcode.com/problems/merge-two-binary-trees/description/) (Easy): Merge Two Binary Trees
