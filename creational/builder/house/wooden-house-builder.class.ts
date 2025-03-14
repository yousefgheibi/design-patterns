import { House } from "./house.class";
import { HouseBuilder } from "./house.interface";

export class WoodenHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  reset(): void {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.walls = "Wooden";
  }

  buildRoof(): void {
    this.house.roof = "Wooden";
  }

  buildFloor(): void {
    this.house.floor = "Wooden";
  }

  getResult(): House {
    return this.house;
  }
}
