## 문제

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

## 풀이

- sort를 쓰지 말고 sort하라는 문제로 읽혔는데, 다른 사람들 풀이를 보니 퀵정렬을 이용하되 재귀를 하지 않고도 풀 수 있는 방법이 있었다.
- nums에 들어갈 값이 0, 1, 2 세개밖에 없으므로 각각 조건부로 0, 1, 2일 때를 넣어서 푼다.

```js
var sortColors = function (nums) {
  let red = 0;
  let white = 0;
  let blue = nums.length - 1;

  while (white <= blue) {
    if (nums[white] == 0) {
      //swap red - white
      [nums[red], nums[white]] = [nums[white], nums[red]];
      red++;
      white++;
    } else if (nums[white] == 1) {
      white++;
    } else if (nums[white] == 2) {
      //swap white - blue
      [nums[blue], nums[white]] = [nums[white], nums[blue]];
      blue--;
    }
  }

  return nums;
};
```

## 출처

[Leetcode 75](https://leetcode.com/problems/sort-colors/description/) (Medium): Sort Colors
