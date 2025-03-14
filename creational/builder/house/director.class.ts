import { House } from "./house.class";
import { HouseBuilder } from "./house.interface";

export class Director {
    constructSimpleHouse(builder: HouseBuilder): House {
        builder.reset();
        builder.buildWalls();
        builder.buildRoof();
        builder.buildFloor();
        return builder.getResult();
    }
}