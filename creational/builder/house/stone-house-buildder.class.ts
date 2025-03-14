import { House } from "./house.class";
import { HouseBuilder } from "./house.interface";

export class StoneHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  reset(): void {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.walls = "Stone";
  }

  buildRoof(): void {
    this.house.roof = "Stone";
  }

  buildFloor(): void {
    this.house.floor = "Stone";
  }

  getResult(): House {
    return this.house;
  }
}
