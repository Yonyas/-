## 문제

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

#### Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

#### Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

## 풀이

- 풀기는 했는데 slice도 사용하고 startIdx + middleIdx 하는 부분이 깔끔하지가 않은 것 같다.
- 다른 풀이를 보자

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const binarySearch = (nums, startIdx = 0) => {
    if (nums.length === 0) {
      return -1;
    }

    const middleIdx = Math.floor(nums.length / 2);

    if (nums[middleIdx] == target) {
      return startIdx + middleIdx;
    } else if (nums[middleIdx] < target) {
      return binarySearch(nums.slice(middleIdx + 1), startIdx + middleIdx + 1);
    } else if (nums[middleIdx] > target) {
      return binarySearch(nums.slice(0, middleIdx), startIdx);
    }
  };

  return binarySearch(nums, 0);
};
```

## 풀이 2

- left, right를 이용해서 arr의 양끝 인덱스를 잡으면 slice를 쓰지 않아도 된다

```js
const search = function (nums, target) {
  const binarySearch = (left, right) => {
    const middleIdx = Math.floor((left + right) / 2);

    if (left <= right) {
      if (nums[middleIdx] == target) {
        return middleIdx;
      } else if (nums[middleIdx] < target) {
        return binarySearch(middleIdx + 1, right);
      } else if (nums[middleIdx] > target) {
        return binarySearch(left, middleIdx - 1);
      }
    } else {
      return -1;
    }
  };

  return binarySearch(0, nums.length - 1);
};
```

## 출처

[Leetcode 704](https://leetcode.com/problems/binary-search/description/) (Easy): Binary search
