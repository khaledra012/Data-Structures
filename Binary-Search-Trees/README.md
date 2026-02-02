# Binary Search Tree in JavaScript

This project provides a simple and clear implementation of a Binary Search Tree (BST) using JavaScript in a single file: BinarySearchTree.js.

The tree supports:
- Inserting values
- Searching for values
- Breadth First Search (BFS)
- Depth First Search (DFS): PreOrder, PostOrder, InOrder

The implementation focuses on correctness, clarity, and algorithmic fundamentals.

## File

BinarySearchTree.js  
Contains the full implementation of the Node class and the BinarySearchTree class with all supported operations.

## How It Works

The Binary Search Tree follows this rule:

Left subtree → values smaller than the node  
Right subtree → values greater than the node  

This property allows efficient searching and traversal when the tree is balanced.

## Example Behavior

After inserting:
10, 5, 13, 11, 2, 16, 7

The traversals return:

BFS:
[10, 5, 13, 2, 7, 11, 16]

DFS PreOrder:
[10, 5, 2, 7, 13, 11, 16]

DFS PostOrder:
[2, 7, 5, 11, 16, 13, 10]

DFS InOrder:
[2, 5, 7, 10, 11, 13, 16]

## Time Complexity

Insert: O(log n) average, O(n) worst case  
Search: O(log n) average, O(n) worst case  
All traversals: O(n)
