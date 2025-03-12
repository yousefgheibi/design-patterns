import { Circle } from "./circle.class";
import { Rectangle } from "./rectangle.class";
import { IShape } from "./shape.interface";
import { Square } from "./square.class";


export class ShapeFactory {
  public getShape(name: string): IShape | null {
    if (name.toLowerCase() == "rectangle") {
      return new Rectangle();
    } else if (name.toLowerCase() == "square") {
      return new Square();
    } else if (name.toLowerCase() == "circle") {
      return new Circle();
    } else return null;
  }
}
