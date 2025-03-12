import { IShape } from "./shape.interface";

export class Circle implements IShape {
    draw(): void {
        console.log("draw Circle ...")
    }
}