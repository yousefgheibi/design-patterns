import { Dialog } from "./dialog.interface";

export class LightDialog implements Dialog {
  render(): void {
    console.log("Rendering Light Dialog");
  }
}

export class DarkDialog implements Dialog {
  render(): void {
    console.log("Rendering Dark Dialog");
  }
}
