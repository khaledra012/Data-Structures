\# 🚶‍♂️ Queue Data Structure Implementation



A high-performance \*\*Queue\*\* implementation in JavaScript, built using a \*\*Singly Linked List\*\* to ensure optimal performance.



This implementation strictly follows the \*\*FIFO\*\* (First In, First Out) principle and guarantees \*\*O(1)\*\* time complexity for both adding and removing elements, solving the performance bottlenecks found in Array-based queues.



\## 🧠 Concept: What is a Queue?



A Queue works just like a real-world line (e.g., waiting at a checkout counter). The first person to join the line is the first person to be served.



\* \*\*Enqueue:\*\* Joining the line (at the back).

\* \*\*Dequeue:\*\* Leaving the line (from the front).

\* \*\*FIFO:\*\* \*\*F\*\*irst \*\*I\*\*n, \*\*F\*\*irst \*\*O\*\*ut.



\## 🚀 Why Linked List? (The Performance Secret)



You might ask: \*"Why not just use a JavaScript Array?"\*



If we use an Array for a Queue:

1\.  Adding to the end (`push`) is \*\*O(1)\*\*.

2\.  \*\*BUT\*\* removing from the start (`shift`) is \*\*O(N)\*\*.



> \*\*The Problem:\*\* Removing the first item in an array forces \*\*every other item\*\* to shift its index by -1. In a queue with 100,000 items, one `dequeue` operation causes 99,999 re-indexing operations!



\*\*My Solution:\*\*

By using a \*\*Linked List\*\*, we simply move the `head` pointer forward during removal. No re-indexing is needed.

\* \*\*Enqueue:\*\* O(1)

\* \*\*Dequeue:\*\* O(1) ✅ (Massive improvement over arrays)



\## 💻 Usage Example



```javascript

const Queue = require('./Queue'); // Assuming the file is named Queue.js



const printerQueue = new Queue();



// 1. Adding tasks (Enqueue)

printerQueue.enqueue("Document\_1.pdf");

printerQueue.enqueue("Image\_2.png");

printerQueue.enqueue("Report\_3.docx");



console.log(printerQueue.size); // Output: 3



// 2. Processing tasks (Dequeue)

// The first item added is the first to be processed (FIFO)

const nextTask = printerQueue.dequeue();



console.log(nextTask); // Output: "Document\_1.pdf"

console.log(printerQueue.first.value); // Output: "Image\_2.png"

