import { IShape } from "./shape.interface";

export class Square implements IShape {
    draw(): void {
        console.log("draw Square ...")
    }
}