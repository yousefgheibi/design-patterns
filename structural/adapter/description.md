# Adapter Design Pattern

**Intent**:  
Convert the interface of a class into another interface that a client expects. The Adapter pattern allows classes with incompatible interfaces to work together.

---

## Problem
- You have an existing class with a useful function, but its interface is incompatible with the rest of your code.
- You want to use an object from an incompatible class, but you cannot modify the class itself.

## Solution
The Adapter pattern acts as a wrapper that converts one interface into another, enabling classes with incompatible interfaces to work together.

---

## Implementation Steps

### 0. Create an Incompatible Class
You start with an existing class that has an interface incompatible with the desired class or system.

### 1. Define a Target Interface
Define an interface that the client expects, which will be compatible with the new system.

### 2. Create an Adapter Class
Create an Adapter class that implements the Target Interface and holds an instance of the incompatible class. The Adapter will "translate" the calls between the incompatible class and the system that expects the target interface.

### 3. Implement Required Methods
In the Adapter class, implement the necessary methods to adapt the interface of the incompatible class to the required interface.

### 4. Use the Adapter in Client Code
The client code can now interact with the adapter, which will handle the communication with the incompatible class.

---

## Benefits of the Adapter Pattern:
- Reusability: The Adapter allows you to reuse existing classes with incompatible interfaces without modifying them.
- Decoupling: It helps decouple the code, allowing clients to work with the target interface rather than the concrete implementation.
- Flexible: Enables new behavior in a class that adheres to an existing interface.

## Use Cases
- Legacy Code: When you need to integrate legacy code or third-party libraries that cannot be modified.
- Multiple Interfaces: When you have to make a system compatible with several different interfaces without changing the original code.
- Object Transformation: When you need to convert objects into different formats or structures that are more suitable for your current system.