## 문제

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

#### Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

## 풀이

- 다음날 숫자랑 비교해서 이익이 나면 이익을 더하고, 손해가 생기면 매도 후 그 다음날에 다시 매수했다.

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }

  return maxProfit;
};
```

## 출처

[Leetcode 122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/) (Medium): Best Time to Buy and Sell Stock II
