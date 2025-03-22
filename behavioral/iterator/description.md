# Iterator Design Pattern

**Intent**:  
Provide a way to traverse the elements of a collection without exposing its underlying structure, such as a list, stack, tree, or graph.

---

## Problem

- Collections store elements in different ways (lists, stacks, trees, etc.), but you need a way to traverse these elements without knowing how they are stored.
- You may want to traverse the same collection in different ways (depth-first, breadth-first, random access).
- Adding traversal algorithms to a collection can make it bulky and less maintainable.
- Client code should be decoupled from the details of how a collection stores or organizes its data.

## Solution

The Iterator pattern extracts the traversal behavior of a collection into a separate object called an iterator. This allows different traversal algorithms to be implemented independently of the collection. The client can interact with the iterator and traverse the collection in a consistent manner, regardless of the collection's internal structure.

---

## Implementation Steps

### 1. Define an Iterator Interface

The iterator interface declares methods for traversing the collection (e.g., `next()`, `hasNext()`) and fetching the next element.

### 2. Implement Concrete Iterators

Concrete iterators implement specific traversal algorithms for the collection. They keep track of the current position within the collection and implement the iterator methods.

### 3. Define a Collection Interface

The collection interface defines methods for creating iterators. It can provide different types of iterators if needed (e.g., friends iterator, coworkers iterator).

### 4. Implement Concrete Collections

Concrete collections implement the collection interface and create new instances of the iterator when requested. They encapsulate the collection’s data but allow iteration through iterators.

### 5. Use Iterators in Client Code

Client code can work with the collection through iterators. The client doesn’t need to know the underlying data structure of the collection and can switch between different types of iterators without modifying the core logic.

