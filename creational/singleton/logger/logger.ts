export class Logger {
  private static _instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._instance) {
      this._instance = new Logger();
    }
    return Logger._instance;
  }

  public log(): void {
    console.log("Singleton instance method called.");
  }
}
