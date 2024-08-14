## 문제

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

#### Example:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

## 풀이 1

- 아래 풀이는 시간초과가 뜬다.
- 답이 없으면 결과는 -1이고, 답이 있다면 복수개가 아닌 유일한 답이기 때문에 min을 구하며며 비교할 필요가 없어서 min을 구하는 코드 삭제해서 풀었다. 풀이는 아래 풀이 2에 있다.

```js
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  let gasStore = Infinity;
  let res;

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] < 0) continue;
    let temp = 0;

    let startI = i;
    for (let j = i; j < startI + gas.length; j++) {
      const carPosition = j % gas.length;
      const netGas = gas[carPosition] - cost[carPosition];
      temp += netGas;
      if (temp < 0) break;
    }
    if (temp < 0) continue;
    const minGas = Math.min(gasStore, temp);
    res = minGas !== gasStore ? i : res;
    gasStore = minGas;
  }

  return res ?? -1;
};
```

## 풀이 2

- 하지만 이 풀이도 시간초과

```js
const canCompleteCircuit = function (gas, cost) {
  let res;

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] - cost[i] < 0) continue;
    let temp = 0;

    let startI = i;
    for (let j = i; j < startI + gas.length; j++) {
      const carPosition = j % gas.length;
      const netGas = gas[carPosition] - cost[carPosition];
      temp += netGas;
      if (temp < 0) break;
    }
    if (temp < 0) continue;
    res = i;
  }

  return res ?? -1;
};
```

## 풀이 3

- for문을 두 번 돌 필요가 없다.
- 답이 unique하기 때문에 현재 가스 충전 상태가 음수가 아닌지 확인하면서 한 번만 도는 코드로 수정했다.
- 이렇게 하면 먼저 나오는 i가 답이 되는데 그래도 되는 이유는 가스 충전에 제한이 없기 때문에 충전 가능하다면 빨리 충전하는게 옳기 때문이다.

```js
const canCompleteCircuit = function (gas, cost) {
  const gasSum = gas.reduce((acc, cur) => acc + cur, 0);
  const costSum = cost.reduce((acc, cur) => acc + cur, 0);
  if (gasSum < costSum) return -1;

  let startPosition = 0;
  let fuel = 0;
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] + fuel < cost[i]) {
      startPosition = i + 1;
      fuel = 0;
    } else {
      fuel += gas[i] - cost[i];
    }
  }
  return startPosition;
};
```

## 출처

[Leetcode 134](https://leetcode.com/problems/gas-station/) (Medium) : Gas Station
