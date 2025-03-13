import { Toolbar } from "./toolbar.interface";

export class LightToolbar implements Toolbar {
  render(): void {
    console.log("Rendering Light Toolbar");
  }
}

export class DarkToolbar implements Toolbar {
  render(): void {
    console.log("Rendering Dark Toolbar");
  }
}
