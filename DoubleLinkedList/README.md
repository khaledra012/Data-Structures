\# 🏗️ JavaScript Data Structures



A collection of efficient Data Structures implemented from scratch in \*\*JavaScript\*\*.

This repository aims to demonstrate a deep understanding of how data structures work under the hood, focusing on memory management, pointer manipulation, and time complexity optimization.



\## 🚀 Current Implementations



\### 1. Doubly Linked List

A fully functional Doubly Linked List class with \*\*O(1)\*\* operations for insertion and removal at both ends.



\*\*Key Features:\*\*

\* \*\*Two-way Navigation:\*\* Each node points to both `next` and `prev`.

\* \*\*Optimized `get(index)` Method:\*\* Uses a "Divide and Conquer" approach. It automatically checks if the index is closer to the `head` or `tail` and traverses from the closest side, reducing the traversal time by \*\*50%\*\*.

\* \*\*Safe Memory Management:\*\* Proper cleanup of pointers (next/prev) when removing nodes to prevent memory leaks.



\*\*Methods Implemented:\*\*

\* `push(val)` / `pop()` - Add/Remove from end.

\* `unshift(val)` / `shift()` - Add/Remove from start.

\* `get(index)` - Retrieve node (Optimized).

\* `set(index, val)` - Update node value.

\* `insert(index, val)` - Add node at specific position.

\* `remove(index)` - Remove node from specific position.



\## 💻 Usage Example



```javascript

const list = new DoublyLinkedList();



// Adding elements

list.push("Apple");

list.push("Banana");

list.unshift("Strawberry");



// Inserting in the middle

list.insert(1, "Orange"); 

// List: Strawberry <-> Orange <-> Apple <-> Banana



// Updating

list.set(2, "Grapes"); 



// Optimized Retrieval

console.log(list.get(3)); // Traverses from Tail (faster)



// Removing

list.remove(1); // Removes "Orange" and restitches pointers

