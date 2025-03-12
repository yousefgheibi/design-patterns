# Singleton Design Pattern

**Intent**:  
Ensure a class has only one instance and provide a global point of access to it.

---

## Problem
- Need to control access to a shared resource (e.g., database connection, logger).
- Want to prevent multiple instances of a class to avoid inconsistent state or resource contention.

## Solution
The Singleton pattern restricts instantiation of a class to a single instance and provides a global access point to that instance.

---

## Implementation Steps

### 0. Private Constructor
Make the class constructor private to prevent direct instantiation via `new`.

### 1. Private Static Instance
Add a private static field to hold the singleton instance.

### 2. Public Static Creation Method
Create a public static method (`getInstance()`) to control the instance creation.

### 3. Lazy Initialization
Create the instance only on the first call to `getInstance()`, then reuse it.
