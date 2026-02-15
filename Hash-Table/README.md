\# Hash Table in JavaScript



This project provides a clear and optimized implementation of a Hash Table using JavaScript in a single file: `HashTable.js`.



The implementation supports:

\- \*\*Storing\*\* key-value pairs (`set`)

\- \*\*Retrieving\*\* values by key (`get`)

\- \*\*Listing\*\* all unique keys (`keys`)

\- \*\*Listing\*\* all unique values (`values`)



The implementation focuses on efficient hashing, collision handling, and constant-time performance for core operations.



\## File



`HashTable.js`  

Contains the full implementation of the `HashTable` class, including an optimized internal hash function and collision management.



\## How It Works



The Hash Table follows these principles:



\* \*\*Hashing Function:\*\* Converts a string key into a numeric index using a prime number multiplier to ensure uniform distribution.

\* \*\*Collision Handling:\*\* Uses \*\*Separate Chaining\*\*, meaning each index in the main array stores a nested array to hold multiple key-value pairs if they hash to the same location.



This approach ensures that even when two keys produce the same index, no data is overwritten.



\## Example Behavior



After inserting these color pairs:  

`("maroon", "#800000")`, `("yellow", "#FFFF00")`, `("olive", "#808000")`, `("salmon", "#FA8072")`



The operations return:



\* \*\*get("maroon"):\*\* `"#800000"`

\* \*\*keys():\*\* `\["maroon", "yellow", "olive", "salmon"]`

\* \*\*values():\*\* `\["#800000", "#FFFF00", "#808000", "#FA8072"]`



\## Time Complexity



\* \*\*Insert (set):\*\* $O(1)$ average case

\* \*\*Search (get):\*\* $O(1)$ average case

\* \*\*Keys / Values:\*\* $O(m + n)$ (where $m$ is array size and $n$ is number of elements)



> \*Note: In the worst-case scenario (poor hashing), time complexity can reach $O(n)$, but with the implemented prime-number hash function, $O(1)$ is maintained.\*

