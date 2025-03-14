# Builder Design Pattern

**Intent**:  
Separate the construction of a complex object from its representation so that the same construction process can create different representations.

---

## Problem
- Need to create complex objects with multiple optional and required parameters.
- Avoid using telescoping constructors that make object creation unreadable.
- Want to ensure the immutability and consistency of the constructed object.

## Solution
The Builder pattern provides a step-by-step approach to constructing objects. It allows an object to be created incrementally and ensures that only fully initialized objects are returned.

---

## Implementation Steps

### 1. Define a Builder Interface
The Builder interface declares product construction steps that are common to all types of builders.

### 2. Implement Concrete Builders
Concrete Builders provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface.

### 3. Define a Product Class
Products are resulting objects. Products constructed by different builders don’t have to belong to the same class hierarchy or interface.

### 4. Implement a Director Class
The Director class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.

### 5. Use the Builder in Client Code
The Client must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction. However, there’s an alternative approach for when the client passes the builder object to the production method of the director. In this case, you can use a different builder each time you produce something with the director.

---

## Example Usage
Using the Builder pattern improves readability, maintains object immutability, and simplifies object creation, especially for objects with many configuration options.

