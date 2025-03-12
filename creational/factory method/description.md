# Factory Method Design Pattern

**Intent**:  
Define an interface for creating an object, but let subclasses alter the type of objects that will be created.

---

## Problem
- Direct instantiation of objects leads to tightly coupled code.
- Need a way to delegate object creation to subclasses to introduce flexibility.
- Want to adhere to the Open-Closed Principle, allowing easy extension without modifying existing code.

## Solution
The Factory Method pattern provides an interface for creating objects but allows subclasses to decide which class to instantiate. It promotes loose coupling and enhances code maintainability.

---

## Implementation Steps

### 0. Define a Common Interface
Create an interface or an abstract class that defines the operations of the objects being created.

### 1. Create Concrete Implementations
Implement multiple variations of the interface to represent different types of objects.

### 2. Define an Abstract Creator Class
Define an abstract class with a factory method that returns the interface type.

### 3. Implement Concrete Creators
Subclasses implement the factory method to instantiate specific concrete classes.

---

## Example Usage
Using the Factory Method pattern allows the client code to work with abstract types without knowing which concrete class is being instantiated.
