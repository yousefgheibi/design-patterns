## Decorator Design Pattern

### **Intent:**

Attach additional responsibilities to an object dynamically. The Decorator pattern provides a flexible alternative to subclassing for extending functionality.

### **Problem**

- Sometimes, we need to add behaviors to individual objects rather than to an entire class.
- Using inheritance to extend functionality can lead to a rigid and complex class hierarchy.
- Need a way to modify an object’s behavior dynamically at runtime.

### **Solution**

The Decorator pattern involves creating a set of decorator classes that are used to wrap concrete components. These decorators implement the same interface as the components they modify, allowing them to be used interchangeably.

### **Implementation Steps**

1. **Define a Common Interface**

   - Create an interface (`Component`) that declares the operation to be altered.

2. **Implement Concrete Components**

   - Create a class (`ConcreteComponent`) that implements `Component` with default behavior.

3. **Create a Base Decorator Class**

   - This class (`Decorator`) should also implement `Component` and contain a reference to a `Component` instance.
   - It should delegate calls to the wrapped component.

4. **Implement Concrete Decorators**

   - Create subclasses (`ConcreteDecoratorA`, `ConcreteDecoratorB`, etc.) that extend `Decorator`.
   - Modify the behavior of the `operation()` method before or after delegating to the wrapped component.

5. **Use the Decorator Pattern**
   - Wrap the base object dynamically with multiple decorators to enhance its behavior.

### **Example in TypeScript**

```typescript
interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

const simple = new ConcreteComponent();
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log(decorator2.operation());
```

### **Benefits of Decorator Pattern**

- **Flexibility:** Enhances individual object behavior without affecting other instances.
- **Open/Closed Principle:** Allows adding new behaviors without modifying existing code.
- **Composition Over Inheritance:** Avoids deep class hierarchies by using composition instead of inheritance.

### **Usage in Angular**

Angular extensively uses the **Decorator Pattern** in its framework, including:

- `@Component`: Defines Angular components dynamically.
- `@Directive`: Extends HTML elements without modifying them.
- `@Injectable`: Enhances service classes with dependency injection.
- `@Pipe`: Modifies data display dynamically.

These decorators enable Angular to dynamically extend and modify behaviors in a clean and modular way.
