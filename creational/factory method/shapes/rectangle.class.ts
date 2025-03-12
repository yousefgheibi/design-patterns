import { IShape } from "./shape.interface";

export class Rectangle implements IShape {
    draw(): void {
        console.log("draw Rectangle ...")
    }
}