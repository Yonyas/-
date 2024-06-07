## 풀이

- 처음 풀었을 때는 "아래 코드블록 내부에 <--- 화살표 표시한 부분" 코드가 없었고 for문 내에 바로 queue.length를 넣었었는데 안 풀렸다.
- for문 내에서 queue.length가 유동적으로 바뀌는 문제 때문이었다.

```js
const maxDepth = function(root) {
    if (!root) return 0;

    let depth = 0;
    const queue = [root];

    while (queue.length > 0) {
        let levelLength = queue.length;  <---

        for (let i = 0; i < levelLength; i++) {
            const currentRoot = queue.shift();
            if (currentRoot.left) {
                queue.push(currentRoot.left)
            }
            if (currentRoot.right) {
                queue.push(currentRoot.right)
            }
        }
        depth += 1;
    }

    return depth;
};
```

## 출처

[리트코드 104번 문제](https://leetcode.com/problems/maximum-depth-of-binary-tree/) (Easy) - Maximum Depth of Binary Tree
