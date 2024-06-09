## 풀이 1 - 재귀

- 리트코드의 난이도 기준을 모르겠다.
- 홈브루를 만든 맥스 하웰이 구글 면접 때 이 문제를 못 풀어서 구글에 못 들어갔다고 한다.
- 그런데 easy라니 ㅠㅠ
- 나도 못 풀어서 답을 보고 나니까 아! 했다.. bfs로 풀어야겠고 큐나 재귀로 풀어야겠다는 생각까지 들고 코드를 짜지 못했다.

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
const invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
  } else {
    return root;
  }
};
```

## 풀이 2 - bfs 큐

- queue에 있는 root를 하나씩 뺀다. -> 자식 둘을 바꾼다. -> queue에 push 한다.
- bfs만 가능한 것 같은데 dfs로 풀 수도 있다. 바꾸는 순서만 달라지는 것 뿐

```js
const invertTree = function (root) {
  const queue = [root];

  while (queue.length > 0) {
    const currentRoot = queue.shift();

    if (currentRoot) {
      [currentRoot.left, currentRoot.right] = [
        currentRoot.right,
        currentRoot.left,
      ];
      queue.push(currentRoot.left, currentRoot.right);
    }
  }

  return root;
};
```

## 출처

[리트코드 226번 문제](https://leetcode.com/problems/invert-binary-tree/description/?source=submission-ac) (Easy): Invert Binary Tree
