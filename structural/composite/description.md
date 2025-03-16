## Composite Design Pattern

### **Intent:**
Compose objects into tree structures to represent part-whole hierarchies. The Composite pattern allows clients to treat individual objects and compositions of objects uniformly.

### **Problem**
- When dealing with hierarchical structures, treating individual objects and groups of objects differently leads to complex and hard-to-maintain code.
- Need a way to handle tree-like structures while maintaining a consistent interface.
- Directly managing parent-child relationships in the client code can be cumbersome.

### **Solution**
The Composite pattern allows clients to interact with individual objects and compositions through a unified interface. This is achieved by using **recursion** to traverse the structure and apply operations uniformly.

### **Implementation Steps**

1. **Define a Common Interface**
   - Create an interface (`MenuItem`) that declares operations for both individual objects and compositions.

2. **Implement Leaf Components**
   - Create a class (`MenuLeaf`) that implements `MenuItem` but does not contain children.

3. **Implement Composite Components**
   - Create a class (`MenuComposite`) that implements `MenuItem` and holds a list of child components.

4. **Use the Composite Pattern**
   - Build a hierarchy of menu items and process them using a recursive function.

### **Benefits of Composite Pattern**
**Uniformity:** Treats both individual and composite objects in the same way.
**Scalability:** Easily extendable to support new components.
**Maintainability:** Reduces conditional logic in the client code by abstracting tree traversal.
