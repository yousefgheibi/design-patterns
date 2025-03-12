import { ICar } from "./car.interface";

export class Toyota implements ICar{
    start(): void {
        console.log("Toyota is Starting...");
    }
    
}