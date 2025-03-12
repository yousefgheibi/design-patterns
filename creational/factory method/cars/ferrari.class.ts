import { ICar } from "./car.interface";

export class Ferrari implements ICar{
    start(): void {
        console.log("Ferrari is Starting...");
    }
    
}