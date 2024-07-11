## 문제

두 배열의 교집합을 구하라

## 풀이

- 생각나는대로 풀어봤는데 중복 처리하는 부분을 set로 할 수 있을 것 같다.

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  return nums1.reduce((acc, cur) => {
    if (nums2.includes(cur) && !acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};
```

## 풀이 2

- set로 처리한 부분.
- 시간복잡도가 O(n^2)이라 별로다.

```js
const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [...set1].filter((num) => set2.has(num));
};
```

## 풀이 3

- 투포인터로 풀어봤다.
- 정렬에 각각 2\*O(n log n), 비교에 O(2n)이 소요되므로 전체는 O(n log n)이다.

```js
const intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let nums1Pointer = 0;
  let nums2Pointer = 0;

  const set = new Set();

  while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
    if (nums1[nums1Pointer] == nums2[nums2Pointer]) {
      set.add(nums1[nums1Pointer]);
      nums1Pointer += 1;
      nums2Pointer += 1;
    } else if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
      nums1Pointer += 1;
    } else {
      nums2Pointer += 1;
    }
  }

  return [...set];
};
```

## 출처

[Leetcode 349](https://leetcode.com/problems/intersection-of-two-arrays/description/) (Easy): Intersection of Two Arrays
