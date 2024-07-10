## 문제

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

#### Example 1:

Input: points = \[[1,3],[-2,2]], k = 1
Output: \[[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just \[[-2,2]].

#### Example 2:

Input: points = \[[3,3],[5,-1],[-2,4]], k = 2
Output: \[[3,3],[-2,4]]
Explanation: The answer \[[-2,4],[3,3]] would also be accepted.

## 풀이

- 좋은 방법이 있을 것 같은데 고민하다가 생각이 안나서 일단 이렇게 풀었다.
- 좋은 방법은 밑에 쓰겠다.

```js
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const res = points
    .map((point) => {
      const distance = point[0] * point[0] + point[1] * point[1];
      return { point, distance };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k)
    .map((point) => point.point);

  return res;
};
```

## 풀이2

- sort 메서드로 한방에 가능했다.

```js
const kClosest = function (points, k) {
  points.sort(
    (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1])
  );

  return points.slice(0, k);
};
```

## 출처

[Leetcode 973](https://leetcode.com/problems/k-closest-points-to-origin/description/) (Medium): K Closest Points to Origin
