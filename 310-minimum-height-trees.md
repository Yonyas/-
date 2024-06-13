## 풀이 1 - 틀림

- Medium이지만 난이도 Hard였다..
- 일단 정답 타입이 `number[]`이지만 답은 하나 아님 두개이다.
- 또 리프를 하나씩 제거해서 중간값을 찾아야 한다는 생각을 했어야 했다.
  &nbsp;
- 그래서 아래와 같이 풀었는데 리프를 제거한다길래 `{node: node's edge count}` 형태로 객체를 만들고 edge가 1인 값들을 제거하는 식으로 풀었다.
- 이렇게 edge의 개수만 가지고 풀면 안되고 `{node: node's neighbors}` 형태로 그려서 edge가 1인 값들을 제거하는 동시에 해당 node의 neighbors에서도 node를 지워줘야 했다.

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  if (edges.length == 0) return 0;

  const edgeCountsByNode = edges.reduce((acc, [node1, node2]) => {
    acc[node1] = acc[node1] == null ? 1 : acc[node1] + 1;
    acc[node2] = acc[node2] == null ? 1 : acc[node2] + 1;

    return acc;
  }, {});

  let sorted = Object.entries(edgeCountsByNode).sort((a, b) => a[1] - b[1]);

  while (sorted.some((s) => s[1] == 1)) {
    sorted = sorted
      .filter((s) => s[1] !== 1)
      .map(([node, count]) => [node, count - 1]);
  }
  const res = sorted.map((s) => s[0]);

  return res;
};
```

## 풀이 2 - 맞음

```js
const findMinHeightTrees = function (n, edges) {
  if (n == 1) return [0];

  let map = new Map();

  edges.forEach(([node1, node2]) => {
    map.set(node1, [...(map.get(node1) ?? []), node2]);
    map.set(node2, [...(map.get(node2) ?? []), node1]);
  });

  let leaves = Array.from(map)
    .filter(([n, nei]) => nei.length == 1)
    .map(([n, nei]) => n);

  while (leaves.length > 0) {
    if (n <= 2) return leaves;

    const newLeaves = [];
    for (leaf of leaves) {
      n -= 1;

      const neighbor = map.get(leaf)[0];
      map.set(
        neighbor,
        map.get(neighbor).filter((n) => n !== leaf)
      );

      if (map.get(neighbor)?.length == 1) newLeaves.push(neighbor);
    }
    leaves = newLeaves;
  }

  return leaves;
};
```

## 출처

[Leetcode 310](https://leetcode.com/problems/minimum-height-trees/description/) (Medium): Minimum Height Trees
