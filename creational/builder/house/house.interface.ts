import { House } from "./house.class";

export interface HouseBuilder {
  reset(): void;
  buildWalls(): void;
  buildRoof(): void;
  buildFloor(): void;
  getResult(): House;
}
