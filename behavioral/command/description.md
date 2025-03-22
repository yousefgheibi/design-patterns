# Command Design Pattern

## Overview

The **Command Design Pattern** is a behavioral design pattern used to encapsulate a request as an object, thereby allowing parameterization of clients with different requests, queuing of requests, and logging of the requests.

## Use Cases

- Implementing **Undo/Redo** functionality.
- Queuing and scheduling tasks.
- Decoupling senders and receivers of commands.

## Implementation
Below is an example implementation of the **Command Pattern** in TypeScript using a remote control system for a TV.

### Step 1: Define the Command Interface

```typescript
interface Command {
  execute(): void;
  undo(): void;
}
```

### Step 2: Create the Receiver

```typescript
class TV {
  turnOn(): void {
    console.log("TV is now ON.");
  }

  turnOff(): void {
    console.log("TV is now OFF.");
  }
}
```

### Step 3: Implement Concrete Commands

```typescript
class TurnOnTVCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.turnOn();
  }

  undo(): void {
    this.tv.turnOff();
  }
}

class TurnOffTVCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.turnOff();
  }

  undo(): void {
    this.tv.turnOn();
  }
}
```

### Step 4: Create the Invoker (Remote Control)

```typescript
class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    if (this.command) {
      this.command.execute();
    }
  }

  pressUndo(): void {
    if (this.command) {
      this.command.undo();
    }
  }
}
```

### Step 5: Usage Example

```typescript
const tv = new TV();
const turnOnCommand = new TurnOnTVCommand(tv);
const turnOffCommand = new TurnOffTVCommand(tv);
const remote = new RemoteControl();

// Turn on TV
remote.setCommand(turnOnCommand);
remote.pressButton(); // Output: TV is now ON.

// Undo (Turn off TV)
remote.pressUndo(); // Output: TV is now OFF.

// Turn off TV
remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: TV is now OFF.

// Undo (Turn on TV)
remote.pressUndo(); // Output: TV is now ON.
```

## Benefits

- **Encapsulation**: Commands encapsulate operations and parameters.
- **Decoupling**: The sender (Invoker) and receiver are loosely coupled.
- **Scalability**: New commands can be easily added without modifying existing code.

## Conclusion

The **Command Pattern** is a powerful pattern that promotes modular and maintainable code. It is widely used in event-driven systems, GUI applications, and task scheduling.
