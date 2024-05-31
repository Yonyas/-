## 풀이

- 큐로 스택 구현하기
- 큐에서 쓰이는 메서드만 사용해야 한다. push, shift 가능 / pop, unshift 불가능
- 나중에 들어간게 먼저 나와야 하므로 push를 하면 해당 값을 제일 앞으로 이동 시킨다.

```js
var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
  for (let i = 0; i < this.q.length - 1; i++) {
    this.q.push(this.q.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

## 출처

리트코드 225번 문제(easy)
https://leetcode.com/problems/implement-stack-using-queues/description/
