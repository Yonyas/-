## 문제

You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

#### Example 1:

Input: people = \[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: \[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
Explanation:
Person 0 has height 5 with no other people taller or the same height in front.
Person 1 has height 7 with no other people taller or the same height in front.
Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
Person 3 has height 6 with one person taller or the same height in front, which is person 1.
Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
Person 5 has height 7 with one person taller or the same height in front, which is person 1.
Hence \[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

## 풀이

- people을 h순으로 오름차순 정렬, h가 같으면 k순으로 오름차순 정렬한다.
- queue 배열을 people의 length와 같게 만들어놓고, 정렬된 people을 훑어가면서 queue 배열에 답을 만들어간다.
- h가 작은 것부터 시작하기 때문에 queue에 현재 h보다 큰 수는 없고, 작거나 같은 수만 있다.
- queue의 첫 인덱스부터 빈 칸만 세면서 k번째 인덱스에 person을 추가한다.
- 이 때 queue 첫 인덱스부터 훑다가 현재 h보다 작은 h가 있으면 people[k+1]을 해준다.
  <br />
- 시간복잡도가 O(N^2)라 비효율적이다.
- 다른 풀이를 보니까 힙을 이용해서 우선순위 큐로 푸는데 javascript는 자체 heap메서드가 없다.
- 또 다른 풀이를 보니까 너무 간단히 잘 푼 풀이가 있어서 아래에 올려본다..

```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  const queue = new Array(people.length).fill(-1);
  people.sort((a, b) => {
    if (a[0] - b[0] !== 0) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (person of people) {
    const h = person[0];
    let k = person[1];

    for (let i = 0; i < people.length; i++) {
      if (queue[i][0] !== -1 && queue[i][0] < h) {
        k++;
      } else if (k === i) break;
    }
    queue[k] = person;
  }
  return queue;
};
```

## 고수의 풀이

- h의 오름차순으로 정렬한다.
- k를 인덱스로 해서 res[k]에 people[k]를 넣어준다.

```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  let res = [];
  people.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]));
  people.forEach((val) => {
    res.splice(val[1], 0, val);
  });
  return res;
};
```

## 출처

[Leetcode 406](https://leetcode.com/problems/queue-reconstruction-by-height/description/) (Medium) : Queue Reconstruction By Height
