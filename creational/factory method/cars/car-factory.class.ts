import { BMW } from "./bmw.class";
import { ICar } from "./car.interface";
import { Ferrari } from "./ferrari.class";
import { Toyota } from "./toyota.class";

export class CarFactory {
  public getCar(name: string): ICar | null {
    if (name.toLowerCase() == "bmw") {
      return new BMW();
    } else if (name.toLowerCase() == "ferrari") {
      return new Ferrari();
    } else if (name.toLowerCase() == "toyota") {
      return new Toyota();
    } else return null;
  }
}
