## 풀이

- remove 주석처리 부분 설명
  - listNode를 돌면서 하나씩 삭제하려면 주석처리한 코드로 해야 한다.
  - 리트코드 문제는 remove할 경우 모든 연결리스트를 다 없애야 해서 아래 코드로 처리했다.

````js
class ListNode {
    constructor(key, val, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

var MyHashMap = function() {
    this.size = 1000;
    this.table = new Array(this.size);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const hash = key % this.size;
    this.table[hash] = new ListNode(key, value, this.table[hash]);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const hash = key % this.size;
    let p = this.table[hash];

    if (p == null) return -1;
    while (p) {
        if (p.key == key) {
            return p.val;
        }
        p = p.next;
    }
    return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const hash = key % this.size;
    let p = this.table[hash];

    if (p == null) return null;
    this.table[hash] = null;


    // if (p.key == key) {
    //     return p = p.next;
    // }

    // let prev = p;
    // p = p.next;
    // while (p) {
    //     if (p.key == key) {
    //         return prev.next = p.next;
    //     }
    //     prev = p;
    //     p = p.next;
    // })
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
```

## 출처

리트코드 706번 문제
https://leetcode.com/problems/design-hashmap/description/
````
