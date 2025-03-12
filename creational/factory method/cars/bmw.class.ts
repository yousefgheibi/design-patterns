import { ICar } from "./car.interface";

export class BMW implements ICar {
  start(): void {
    console.log("BMW is Starting...");
  }
}
