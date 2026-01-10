# Singly Linked List (JS) 🔗

A highly optimized implementation of the **Singly Linked List** data structure using modern JavaScript (ES6 Classes).
This implementation focuses on handling edge cases, pointer manipulation, and algorithmic efficiency.

## 🌟 Features

* **Complete API:** Includes `push`, `pop`, `shift`, `unshift`, `get`, `set`, `insert`, `remove`.
* **Utility Methods:** `reverse` (in-place) and `traverse` (returns clean array output).
* **Smart Rotation:** An efficient `rotate(k)` method that handles:
    * Large numbers (`k > length`).
    * Negative numbers (Left Rotation support).
    * Zero-cost operations (when `k % length === 0`).

## 🛠 Usage Example

```javascript
const { SinglyLinkedList } = require('./index'); // Or copy the class

const list = new SinglyLinkedList();

// 1. Chaining adds
list.push(10).push(20).push(30).push(40).push(50);
list.traverse(); 
// Output: [10, 20, 30, 40, 50]

// 2. Rotate (Right)
list.rotate(2);
list.traverse(); 
// Output: [40, 50, 10, 20, 30]

// 3. Rotate (Left / Negative)
list.rotate(-1);
list.traverse(); 
// Output: [50, 10, 20, 30, 40]

// 4. Reverse
list.reverse();
list.traverse();
// Output: [40, 30, 20, 10, 50]