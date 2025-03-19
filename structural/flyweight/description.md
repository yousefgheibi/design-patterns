## Flyweight Design Pattern

### **Intent:**

Optimize memory usage and improve performance by sharing common data between multiple objects instead of storing duplicate data.

### **Problem**

- Applications that need to create a large number of similar objects can suffer from excessive memory consumption.
- Duplicate data stored in each object increases resource usage and reduces efficiency.
- Need a way to minimize redundancy while maintaining object behavior.

### **Solution**

The Flyweight pattern introduces **shared objects** that store common data (**intrinsic state**) and allows individual objects to maintain unique data (**extrinsic state**). This reduces memory usage by ensuring that common data is not duplicated.

### **Implementation Steps**

1. **Identify Shared and Unique Data**

   - Determine which properties of the object remain the same across multiple instances (**intrinsic state**).
   - Identify the unique properties (**extrinsic state**) that should be stored externally.

2. **Create the Flyweight Class**

   - Implement a class that contains the shared (intrinsic) data.

3. **Implement a Flyweight Factory**

   - Create a factory that manages instances of the Flyweight class.
   - Ensure that new objects are only created if an existing one does not already meet the requirements.

4. **Use the Flyweight Objects**
   - Instead of creating multiple identical objects, request instances from the factory.
   - Store unique (extrinsic) data separately, such as in a wrapper object.

### **Benefits of Flyweight Pattern**

- **Reduces Memory Usage:** Avoids storing duplicate data in multiple objects.
- **Improves Performance:** Efficiently manages large numbers of objects by sharing common state.
- **Encapsulation of Shared State:** Keeps intrinsic state separate from extrinsic state, making the system more scalable.
- **Ideal for Large-Scale Systems:** Useful in scenarios like rendering a large number of graphical elements, text processing, or managing UI components.

### **Example Use Cases**

- **Text Editors:** Reusing font styles and formatting settings instead of storing them separately for each character.
- **Game Development:** Managing multiple objects like trees, cars, or enemies that share the same appearance.
- **Data Caching:** Reusing common configurations to optimize performance in large-scale applications.
