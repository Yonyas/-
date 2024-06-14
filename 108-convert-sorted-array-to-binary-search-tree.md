## 풀이

- 재귀로 풀었다.
- 잘 풀려서 기분 좋다

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;

  const middleIdx = Math.ceil(nums.length / 2) - 1;
  const node = new TreeNode(nums[middleIdx]);

  node.left = sortedArrayToBST(nums.slice(0, middleIdx));
  node.right = sortedArrayToBST(nums.slice(middleIdx + 1));

  return node;
};
```

## 출처

[Leetcode 108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/) (Easy): Convert Sorted Array To Binary Search Tree
