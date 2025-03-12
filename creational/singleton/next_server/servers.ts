export class Servers {
  private constructor() {}

  private static _instance: Servers;
  private hostsList: string[] = ["ali", "reza", "yousef", "hassan"];
  private index: number = 0;

  public nextServer() {
    this.index++;
    if (this.index >= this.hostsList.length) {
      this.index = 0;
    }
    return this.hostsList[this.index];
  }

  public static getInstance(): Servers {
    if (!Servers._instance) {
      this._instance = new Servers();
    }
    return this._instance;
  }
}
