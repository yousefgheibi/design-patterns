interface Command {
  execute(): void;
  undo(): void;
}

class TV {
  turnOn(): void {
    console.log("TV is now ON.");
  }

  turnOff(): void {
    console.log("TV is now OFF.");
  }
}

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

// Invoker
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

const tv = new TV();
const turnOnCommand = new TurnOnTVCommand(tv);
const turnOffCommand = new TurnOffTVCommand(tv);

const remote = new RemoteControl();

remote.setCommand(turnOnCommand);
remote.pressButton();

remote.pressUndo();

remote.setCommand(turnOffCommand);
remote.pressButton();

remote.pressUndo();
