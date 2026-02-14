\# 🌳 Binary Heaps \& Priority Queues



This repository contains a complete explanation and implementation of a \*\*Binary Heap\*\* and its most popular application: the \*\*Priority Queue\*\*, written in JavaScript.



---



\## 🧐 What is a Binary Heap?

A Binary Heap is a specialized tree-based data structure that is similar to a Binary Search Tree, but with different rules:

1\.  \*\*Structure:\*\* It must be a \*\*Complete Tree\*\*. All levels are fully filled from left to right, with no gaps.

2\.  \*\*Order:\*\*

&nbsp;   \* \*\*MaxBinaryHeap:\*\* The parent is always \*\*greater\*\* than its children.

&nbsp;   \* \*\*MinBinaryHeap:\*\* The parent is always \*\*smaller\*\* than its children.



> \*\*Note:\*\* There is no implied order between siblings (left and right children) in a Heap. The order is strictly vertical (Parent vs. Child).



---



\## 🧮 Array Storage

Since the tree is "complete," we do not need complex `Node` pointers. We can store the entire heap in a flat `Array` using simple math to traverse it:



For any element at index `n`:

\* \*\*Left Child:\*\* `2n + 1`

\* \*\*Right Child:\*\* `2n + 2`

\* \*\*Parent:\*\* `Math.floor((n - 1) / 2)`



---



\## 🚑 Priority Queue

A Priority Queue is an abstract data type where each element has a \*\*priority\*\*. Elements with higher priority are served before elements with lower priority.



This implementation uses a \*\*MinBinaryHeap\*\*.

\* \*\*Priority 1\*\* = Highest Priority (Top importance).

\* \*\*Priority 5\*\* = Lower Priority.

\* Therefore, the \*\*smallest number\*\* must bubble up to the root.



\### Core Operations:

1\.  \*\*Enqueue (Insert):\*\*

&nbsp;   \* Add element to the end of the array.

&nbsp;   \* \*\*Bubble Up:\*\* Compare with the parent and swap if the new element has higher priority (smaller number).

2\.  \*\*Dequeue (Extract):\*\*

&nbsp;   \* Remove the Root (highest priority).

&nbsp;   \* Move the last element to the Root position.

&nbsp;   \* \*\*Sink Down:\*\* Compare with children and swap with the \*\*highest priority child\*\* (smallest number) until settled.



---



\## ⚡ Big O Notation (Time Complexity)



| Operation | Complexity | Reason |

| :--- | :--- | :--- |

| \*\*Insertion\*\* | \*\*O(log n)\*\* | We only traverse the height of the tree. |

| \*\*Removal\*\* | \*\*O(log n)\*\* | We only traverse the height of the tree. |

| \*\*Search\*\* | \*\*O(n)\*\* | Heaps are not sorted horizontally, so we must scan the array. |



---



\## 💻 Full Implementation (JavaScript)



Below is the complete `PriorityQueue` class using Min Heap logic.



```javascript



// --- 🧪 Example Usage ---

// const ER = new PriorityQueue();

// ER.enqueue("Common Cold", 5);

// ER.enqueue("Gunshot Wound", 1);

// ER.enqueue("High Fever", 4);

// ER.enqueue("Broken Arm", 2);



// console.log(ER.dequeue()); // Node { val: 'Gunshot Wound', priority: 1 }

// console.log(ER.dequeue()); // Node { val: 'Broken Arm', priority: 2 }

// console.log(ER.dequeue()); // Node { val: 'High Fever', priority: 4 }

