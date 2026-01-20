\# 🥞 Stack Data Structure Implementation



A high-performance \*\*Stack\*\* implementation in JavaScript, built from scratch using a \*\*Singly Linked List\*\* approach.



Unlike standard Array-based stacks, this implementation guarantees \*\*O(1)\*\* time complexity for both adding (`push`) and removing (`pop`) elements, avoiding the re-indexing performance cost associated with Arrays.



\## 🧠 Concept: What is a Stack?



A Stack follows the \*\*LIFO\*\* (Last In, First Out) principle. Think of it like a stack of plates; you can only add a plate to the top, and you can only take a plate from the top.



\### ⚡ Real-World Example: The JavaScript Call Stack

This implementation mimics how the \*\*JavaScript Engine\*\* handles function calls internally:



1\.  \*\*Push:\*\* When a function is invoked, it is "pushed" onto the Call Stack.

2\.  \*\*Execution:\*\* The engine executes the function on top.

3\.  \*\*Pop:\*\* When the function returns (finishes), it is "popped" off the stack, and the engine goes back to the function beneath it.



> \*\*Note:\*\* This data structure is also the backbone of features like \*\*Undo/Redo\*\* in editors and \*\*Browser History\*\* routing.



\## 🛠️ Features

\* \*\*Constant Time Operations:\*\* `Push` and `Pop` are always \*\*O(1)\*\*.

\* \*\*Memory Efficient:\*\* Uses Nodes and Pointers instead of allocating large contiguous memory blocks like Arrays.

\* \*\*Clean API:\*\* Simple methods to manage data flow.



\## 💻 Usage Example



```javascript

const Stack = require('./Stack'); // Assuming the file is named Stack.js



const myStack = new Stack();



// 1. Adding data (Push)

myStack.push("Google.com");

myStack.push("Instagram.com");

myStack.push("YouTube.com");



console.log(myStack.size); // Output: 3



// 2. Removing data (Pop)

// The last item added (YouTube) is the first to be removed.

const lastVisited = myStack.pop(); 



console.log(lastVisited); // Output: "YouTube.com"

console.log(myStack.first.value); // Output: "Instagram.com"

