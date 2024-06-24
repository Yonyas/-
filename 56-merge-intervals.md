## 문제

겹치는 구간을 병합하라

Example:
Input: intervals = \[[1,3],[2,6],[8,10],[15,18]]
Output: \[[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

## 풀이

- 처음에는 재귀로 풀어야 하나 생각하다가 삽질했다.
- 그 다음에는 두번째 배열[1]이 첫번째 배열[1]보다 커야겠다고 이상하게 추측하고 풀어서 삽질했다.
- 이상하게 추측하지 말자

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
consts merge = function(intervals) {
    const res = [];

    for (interval of intervals.sort((a,b) => a[0]-b[0])) {
        if (res.length > 0 && res.at(-1)[1] >= interval[0]) {
            const bigger = Math.max(res.at(-1)[1], interval[1])
            res.at(-1)[1] = bigger;
        } else {
            res.push(interval)
        }
    }

    return res;
};

```

## 출처

[Leetcode 56](https://leetcode.com/problems/merge-intervals/) (Medium): Merge Intervals
